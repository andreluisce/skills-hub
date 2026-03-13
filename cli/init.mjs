#!/usr/bin/env node
/**
 * skills-hub init
 *
 * Run from inside any app repo:
 *   npx skills-hub init
 *   pnpm dlx skills-hub init
 *
 * Generates in the target app:
 *   CLAUDE.md / AGENTS.md / GEMINI.md              context files for all 3 tools
 *   .claude/rules/                                  split rules (stack, conventions, workflow)
 *   .agents/skills/<slug>/SKILL.md                  open standard (Codex + Gemini)
 *   .agents/skills/<slug>/agents/openai.yaml         Codex UI metadata
 *   .claude/skills/<slug>/SKILL.md                  Claude skills with frontmatter
 *   .claude/commands/<slug>.md                      slash commands per skill
 *   .claude/commands/plan.md                        cross-model plan workflow
 *   .claude/agents/<agentId>.md                     agents with full frontmatter
 *   .claude/agent-memory/<agentId>/MEMORY.md        persistent agent memory stubs
 *   .mcp.json                                       project MCP servers (all tools)
 *   .claude/settings.json                           Claude permissions + hooks + UI
 *   .gemini/settings.json                           Gemini context file config
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createInterface } from 'node:readline';
import { spawnSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hubRoot = path.resolve(__dirname, '..');
const targetRoot = process.cwd();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function runYqFromPython(inputYaml) {
  const code = `import yaml, json, sys; print(json.dumps(yaml.safe_load(sys.stdin.read())))`;
  const out = spawnSync('python3', ['-c', code], { input: inputYaml, encoding: 'utf-8' });
  if (out.status !== 0) throw new Error(`Failed to parse YAML: ${out.stderr}`);
  return JSON.parse(out.stdout);
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

function rl() {
  return createInterface({ input: process.stdin, output: process.stdout });
}

async function ask(iface, question, defaultVal) {
  return new Promise((resolve) => {
    const hint = defaultVal ? ` (${defaultVal})` : '';
    iface.question(`${question}${hint}: `, (ans) => {
      resolve(ans.trim() || defaultVal || '');
    });
  });
}

async function askMulti(iface, question, choices) {
  console.log(`\n${question}`);
  choices.forEach((c, i) => console.log(`  ${i + 1}. ${c.name} — ${c.description}`));
  console.log(`  a. All`);
  const ans = await ask(iface, 'Enter numbers separated by commas, or "a" for all', 'a');
  if (ans === 'a') return choices;
  return ans
    .split(',')
    .map((s) => parseInt(s.trim(), 10) - 1)
    .filter((i) => i >= 0 && i < choices.length)
    .map((i) => choices[i]);
}

// ---------------------------------------------------------------------------
// Load skills from core/
// ---------------------------------------------------------------------------

async function loadAllSkills() {
  const coreDir = path.join(hubRoot, 'core');
  const entries = await fs.readdir(coreDir, { withFileTypes: true });
  const skills = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const yamlPath = path.join(coreDir, entry.name, 'skill.yaml');
    try {
      const raw = await fs.readFile(yamlPath, 'utf-8');
      const skill = runYqFromPython(raw);
      const playbook = await fs.readFile(path.join(coreDir, entry.name, 'playbook.md'), 'utf-8').catch(() => '');
      skills.push({ slug: entry.name, skill, playbook });
    } catch { /* skip malformed */ }
  }
  return skills.sort((a, b) => a.slug.localeCompare(b.slug));
}

// ---------------------------------------------------------------------------
// Load agent contracts from agents/
// ---------------------------------------------------------------------------

async function loadAllAgents() {
  const agentsDir = path.join(hubRoot, 'agents');
  const entries = await fs.readdir(agentsDir, { withFileTypes: true });
  const agents = [];
  for (const entry of entries) {
    if (!entry.name.endsWith('.agent.yaml')) continue;
    try {
      const raw = await fs.readFile(path.join(agentsDir, entry.name), 'utf-8');
      agents.push(runYqFromPython(raw));
    } catch { /* skip malformed */ }
  }
  return agents;
}

// ---------------------------------------------------------------------------
// Auto-detect app context from package.json
// ---------------------------------------------------------------------------

async function detectAppContext() {
  try {
    const raw = await fs.readFile(path.join(targetRoot, 'package.json'), 'utf-8');
    const pkg = JSON.parse(raw);
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    const stack = {
      hasNext:       !!(deps['next']),
      hasReact:      !!(deps['react']),
      hasSupabase:   !!(deps['@supabase/supabase-js'] || deps['@supabase/ssr']),
      hasTanstack:   !!(deps['@tanstack/react-query']),
      hasShadcn:     !!(deps['@shadcn/ui'] || deps['shadcn-ui']),
      hasTailwind:   !!(deps['tailwindcss']),
      hasPlaywright: !!(deps['@playwright/test']),
      hasGithubCI:   !!(deps['@octokit/rest'] || deps['@actions/core']),
    };
    return { name: pkg.name || path.basename(targetRoot), description: pkg.description || '', stack };
  } catch {
    return { name: path.basename(targetRoot), description: '', stack: {} };
  }
}

// ---------------------------------------------------------------------------
// Suggest skills based on detected stack
// ---------------------------------------------------------------------------

function suggestSkills(allSkills, detectedStack) {
  const hints = [];
  if (detectedStack.hasNext)       hints.push('next', 'app-router', 'frontend');
  if (detectedStack.hasReact)      hints.push('react');
  if (detectedStack.hasSupabase)   hints.push('supabase');
  if (detectedStack.hasTanstack)   hints.push('tanstack', 'query');
  if (detectedStack.hasShadcn)     hints.push('shadcn');
  if (detectedStack.hasPlaywright) hints.push('playwright', 'e2e');
  if (detectedStack.hasGithubCI)   hints.push('ci', 'github');
  if (!hints.length) return allSkills;
  return allSkills.filter(({ slug, skill }) => {
    const haystack = [slug, ...(skill.triggers || [])].join(' ').toLowerCase();
    return hints.some((h) => haystack.includes(h));
  });
}

// ---------------------------------------------------------------------------
// Skills that benefit from isolated (fork) context
// These run in a subagent rather than inline — keeps main context clean
// ---------------------------------------------------------------------------

const FORK_CONTEXT_SLUGS = new Set([
  'e2e-testing-playwright',
  'ci-quality-gates',
  'security-owasp',
  'security-api-hardening',
  'security-auth-authz',
  'security-secrets-management',
  'llm-extraction-pipeline',
  'pdf-extraction-strategy',
  'data-pipeline-design',
]);

// Skills that are preloaded into agents (hidden from slash menu)
// These serve as background knowledge, not user-invocable commands
const AGENT_ONLY_SLUGS = new Set([
  'software-architecture-fundamentals',
  'clean-code-architecture',
  'philosophy-software-design',
  'pragmatic-programmer',
  'essentialism-antifragile',
  'thinking-fast-slow',
  'designing-data-intensive-apps',
]);

// ---------------------------------------------------------------------------
// .claude/skills/<slug>/SKILL.md — Claude with full frontmatter
// ---------------------------------------------------------------------------

function buildClaudeSkillMd(slug, skill, playbook) {
  const isFork = FORK_CONTEXT_SLUGS.has(slug);
  const isAgentOnly = AGENT_ONLY_SLUGS.has(slug);

  const fm = [
    '---',
    `name: ${skill.name}`,
    `description: ${skill.description}`,
    isAgentOnly ? 'user-invocable: false' : 'user-invocable: true',
    isFork ? 'context: fork' : null,
    // Pre-approve tools this skill needs — no permission prompts
    'allowed-tools: Read, Edit, Write, Bash',
    '---',
    '',
  ].filter(Boolean).join('\n');

  return fm + [
    `# ${skill.displayName}`,
    '',
    skill.description,
    '',
    `## Stack`,
    `- ${skill.stack.framework}`,
    `- ${skill.stack.react}`,
    `- ${skill.stack.serverState}`,
    `- ${skill.stack.ui}`,
    `- ${skill.stack.workspace}`,
    '',
    `## Workflow`,
    ...skill.workflow.map((w) => `${w.step}. ${w.action}`),
    '',
    `## Output Contract`,
    ...skill.outputContract.map((o) => `- ${o}`),
    '',
    playbook,
  ].join('\n');
}

// ---------------------------------------------------------------------------
// .agents/skills/<slug>/SKILL.md — Open Agent Skills Standard (Codex + Gemini)
// ---------------------------------------------------------------------------

function buildOpenSkillMd(skill, playbook) {
  return [
    '---',
    `name: ${skill.name}`,
    `description: ${skill.description} Use when: ${skill.triggers.slice(0, 4).join(', ')}.`,
    '---',
    '',
    `# ${skill.displayName}`,
    '',
    `## Stack`,
    `- ${skill.stack.framework}`,
    `- ${skill.stack.react}`,
    `- ${skill.stack.serverState}`,
    `- ${skill.stack.ui}`,
    `- ${skill.stack.workspace}`,
    '',
    `## Workflow`,
    ...skill.workflow.map((w) => `${w.step}. ${w.action}`),
    '',
    `## Output`,
    ...skill.outputContract.map((o, i) => `${i + 1}. ${o}`),
    '',
    playbook,
  ].join('\n');
}

// ---------------------------------------------------------------------------
// .agents/skills/<slug>/agents/openai.yaml — Codex UI metadata
// ---------------------------------------------------------------------------

function buildOpenAIYaml(slug, skill) {
  const isAgentOnly = AGENT_ONLY_SLUGS.has(slug);
  return [
    `interface:`,
    `  display_name: "${skill.displayName}"`,
    `  short_description: "${skill.description.slice(0, 100)}"`,
    `  default_prompt: "Use $${skill.name} to apply ${skill.displayName} expertise."`,
    ``,
    `policy:`,
    `  allow_implicit_invocation: ${isAgentOnly ? 'false' : 'true'}`,
  ].join('\n');
}

// ---------------------------------------------------------------------------
// .claude/commands/<slug>.md — slash command with allowed-tools frontmatter
// ---------------------------------------------------------------------------

// Map skill categories to the tools they actually need
function skillAllowedTools(slug) {
  if (slug.includes('playwright') || slug.includes('e2e'))   return 'Read, Bash, mcp__playwright__*';
  if (slug.includes('security'))                             return 'Read, Bash, WebFetch';
  if (slug.includes('supabase'))                             return 'Read, Edit, Write, Bash, mcp__supabase__*';
  if (slug.includes('data') || slug.includes('pipeline'))    return 'Read, Edit, Write, Bash';
  if (slug.includes('pdf') || slug.includes('llm-extract'))  return 'Read, Write, WebFetch';
  if (slug.includes('ci') || slug.includes('github'))        return 'Read, Bash, mcp__github__*';
  return 'Read, Edit, Write, Bash';
}

function buildSlashCommand(slug, skill, playbook) {
  const isFork = FORK_CONTEXT_SLUGS.has(slug);
  return [
    '---',
    `description: Apply ${skill.displayName} skill`,
    `argument-hint: [optional context or file path]`,
    `allowed-tools: ${skillAllowedTools(slug)}`,
    isFork ? 'context: fork' : null,
    '---',
    '',
    `# ${skill.displayName}`,
    '',
    skill.description,
    '',
    `## Triggers`,
    ...skill.triggers.map((t) => `- ${t}`),
    '',
    `## Workflow`,
    ...skill.workflow.map((w) => `${w.step}. ${w.action}`),
    '',
    `## Output Contract`,
    ...skill.outputContract.map((o) => `- ${o}`),
    '',
    '---',
    '',
    playbook,
  ].filter(Boolean).join('\n');
}

// ---------------------------------------------------------------------------
// .claude/commands/plan.md — cross-model plan workflow
// ---------------------------------------------------------------------------

function buildPlanCommand(appName) {
  return `---
description: Plan a feature using Cross-Model workflow (Claude plan → Codex review → Claude implement)
argument-hint: <feature name>
allowed-tools: Read, Write, AskUserQuestion
model: opus
---

# Cross-Model Feature Plan

You are planning a new feature for **${appName}**.

## Step 1 — Interview

Use the AskUserQuestion tool to gather:
1. What is the feature? What problem does it solve?
2. Which parts of the codebase are affected?
3. Constraints (performance, backward compat, deadlines)?
4. Acceptance criteria — what does "done" look like?

## Step 2 — Explore First

Read the relevant codebase before writing anything. Never plan without reading first.

## Step 3 — Write the Plan

Save to \`plans/$ARGUMENTS.md\`:

\`\`\`markdown
# Plan: <feature>

## Goal
<one sentence>

## Phases
### Phase 1 — <name>
- Tasks
- Test gate: <what must pass before Phase 2>

### Phase 2 — <name>
...

## Risks
## Open Questions
\`\`\`

## Step 4 — Cross-Model Review (manual)

Open Codex CLI in a second terminal and run:
\`\`\`
Review plans/$ARGUMENTS.md against the codebase.
Insert "Phase N.5 — Codex Finding" sections for gaps.
Never rewrite existing phases — only add.
\`\`\`

## Step 5 — Implement

Start a **new** Claude session (use /clear or open fresh). Implement phase-by-phase with test gates at each boundary. Commit at each phase.
`;
}

// ---------------------------------------------------------------------------
// Agent config — model, maxTurns, isolation, background per agent role
// ---------------------------------------------------------------------------

const AGENT_CONFIG = {
  'software-architect':         { model: 'opus',   maxTurns: 10, isolation: 'worktree', background: false },
  'frontend-architect':         { model: 'sonnet', maxTurns: 15, isolation: 'worktree', background: false },
  'backend-supabase-architect': { model: 'sonnet', maxTurns: 15, isolation: 'worktree', background: false },
  'ui-ux-architect':            { model: 'sonnet', maxTurns: 10, isolation: null,        background: false },
  'data-architect':             { model: 'sonnet', maxTurns: 10, isolation: 'worktree', background: false },
  'security-architect':         { model: 'opus',   maxTurns: 8,  isolation: 'worktree', background: false },
  'qa-dev':                     { model: 'sonnet', maxTurns: 20, isolation: null,        background: true  },
  'pm-po-master':               { model: 'sonnet', maxTurns: 10, isolation: null,        background: false },
  'pdf-data-extractor':         { model: 'sonnet', maxTurns: 15, isolation: null,        background: true  },
};

// ---------------------------------------------------------------------------
// .claude/agents/<agentId>.md — full frontmatter
// ---------------------------------------------------------------------------

function buildAgentFile(agent, slugSet) {
  const cfg = AGENT_CONFIG[agent.agentId] ?? { model: 'sonnet', maxTurns: 10, isolation: null, background: false };

  // Only preload skills that are actually installed in this app
  const activeSkills = (agent.allowedSkills || []).filter((s) => slugSet.has(s));
  const constraints   = (agent.constraints || []).map((c) => `- ${c}`).join('\n');
  const approvals     = (agent.humanApproval?.requiredFor || []).map((a) => `- ${a}`).join('\n');

  const fmLines = [
    '---',
    `name: ${agent.agentId}`,
    `description: ${agent.purpose}`,
    `model: ${cfg.model}`,
    `maxTurns: ${cfg.maxTurns}`,
    `memory: project`,
    `permissionMode: acceptEdits`,
    cfg.isolation  ? `isolation: ${cfg.isolation}` : null,
    cfg.background ? `background: true`            : null,
    activeSkills.length
      ? `skills:\n${activeSkills.map((s) => `  - ${s}`).join('\n')}`
      : null,
    '---',
    '',
  ].filter(Boolean).join('\n');

  return fmLines + [
    `# ${agent.agentId}`,
    '',
    `**Purpose:** ${agent.purpose}`,
    '',
    `**Responsibility:** ${agent.responsibility?.primary ?? ''}`,
    '',
    constraints ? `## Constraints\n\n${constraints}` : '',
    '',
    approvals ? `## Requires Human Approval For\n\n${approvals}` : '',
  ].filter((l) => l !== null).join('\n');
}

// ---------------------------------------------------------------------------
// .claude/agent-memory/<agentId>/MEMORY.md
// ---------------------------------------------------------------------------

function buildAgentMemoryStub(agent) {
  return `# ${agent.agentId} — Agent Memory

> Managed by the agent. First 200 lines injected into context on each run.
> Move content to topic files (e.g. patterns.md, decisions.md) when this exceeds 200 lines.

## Patterns Observed
<!-- Recurring code patterns, conventions discovered in this codebase -->

## Decisions Made
<!-- Architectural decisions and rationale (ADR format) -->

## Known Issues
<!-- Open risks, technical debt, unresolved questions -->

## Codebase Notes
<!-- Key file locations, module boundaries, gotchas -->
`;
}

// ---------------------------------------------------------------------------
// CLAUDE.md / AGENTS.md / GEMINI.md — lean top-level context, imports rules
// Under 200 lines per best practice — detailed rules split into .claude/rules/
// ---------------------------------------------------------------------------

function buildContextContent(appName, appDescription, selected, relevantAgents) {
  const skillList  = selected.map(({ slug, skill }) => `- \`${slug}\` — ${skill.displayName}`).join('\n');
  const agentList  = relevantAgents.length
    ? relevantAgents.map((a) => `- \`${a.agentId}\` — ${a.purpose}`).join('\n')
    : '- (none matched selected skills)';
  const stackValues = selected
    .flatMap(({ skill }) => Object.values(skill.stack))
    .filter((v, i, a) => v && a.indexOf(v) === i)
    .map((v) => `- ${v}`)
    .join('\n');

  return `# ${appName}
${appDescription ? '\n' + appDescription + '\n' : ''}
## Active Skills

${skillList}

## Active Agents

${agentList}

## Stack

${stackValues}

## How to use

- Invoke a skill: \`/${selected[0]?.slug ?? 'skill-name'}\` in Claude Code
- Plan a feature: \`/plan <feature-name>\`
- Skills also load in Codex (\`.agents/skills/\`) and Gemini (\`.gemini/skills/\`)

## Rules

@.claude/rules/stack.md
@.claude/rules/conventions.md
@.claude/rules/workflow.md

---
_Generated by skills-hub. Re-run \`npx skills-hub init\` to update._
`;
}

// ---------------------------------------------------------------------------
// .claude/rules/ — split rules files (keeps CLAUDE.md under 200 lines)
// ---------------------------------------------------------------------------

function buildRulesStack(selected) {
  const stackValues = selected
    .flatMap(({ skill }) => Object.values(skill.stack))
    .filter((v, i, a) => v && a.indexOf(v) === i);

  return `# Stack Rules

## Target Stack

${stackValues.map((v) => `- ${v}`).join('\n')}

## Framework Constraints

- Use App Router patterns exclusively — no Pages Router
- Server Components by default; opt into Client Components only when interactivity requires it
- Data fetching in Server Components or via TanStack Query — no useEffect for data fetching
- All forms use server actions or TanStack Query mutations
- shadcn/ui components as base — never override component internals, extend via props/variants

## Styling

- Tailwind v4 utility classes only — no custom CSS files unless absolutely necessary
- Dark mode via \`dark:\` variant — never hardcode colors
- Responsive: mobile-first with \`sm:\`, \`md:\`, \`lg:\` breakpoints
`;
}

function buildRulesConventions() {
  return `# Conventions

## Code

- TypeScript strict mode — no \`any\`, no non-null assertions without comment
- Named exports only — no default exports except page/layout files (Next.js requirement)
- Co-locate tests with source files: \`foo.ts\` → \`foo.test.ts\`
- No barrel files (\`index.ts\`) — import directly from source

## Files & Folders

- Components: \`PascalCase.tsx\`
- Utilities/hooks: \`camelCase.ts\`
- Route segments: \`kebab-case/\`
- Environment variables: \`SCREAMING_SNAKE_CASE\`, always validated at startup

## Git

- Conventional commits: \`feat:\`, \`fix:\`, \`chore:\`, \`docs:\`, \`refactor:\`, \`test:\`
- Commit at each completed phase — never bundle unrelated changes
- Branch names: \`feat/<slug>\`, \`fix/<slug>\`

## Comments

- Only comment non-obvious logic — not what, but why
- TODO format: \`// TODO(name): description\`
`;
}

function buildRulesWorkflow() {
  return `# Workflow Rules

## Before Coding

1. Read existing code in the affected area first — never modify blind
2. Use plan mode (\`/plan\`) for any change touching more than 2 files
3. Ask clarifying questions before implementing (AskUserQuestion tool)

## While Coding

- Make small, atomic changes — one concern per commit
- Run lint + type-check after every meaningful change: \`pnpm lint && pnpm typecheck\`
- Never leave the codebase in a broken state between commits

## Context Management

- Use \`/compact\` proactively at ~50% context usage — don't wait for the warning
- Use \`/clear\` between unrelated tasks — don't carry dead context
- Use \`Esc Esc\` or \`/rewind\` immediately if Claude goes off-track — don't try to fix in the same context
- Commit before starting a new task so \`/rewind\` is safe

## Review

- After implementing: run the full test suite before marking done
- For risky changes: describe what you changed and why in the commit message
- Cross-model verification: use Codex to review Claude's output for critical features
`;
}

// ---------------------------------------------------------------------------
// .mcp.json — project-scoped, read by Claude + Codex + Gemini
// ---------------------------------------------------------------------------

function buildMcpJson(selectedSlugs) {
  const slugs = new Set(selectedSlugs);
  const servers = {
    // Up-to-date library docs — prevents hallucinated APIs
    context7: { command: 'npx', args: ['-y', '@upstash/context7-mcp'] },
    // Browser automation + UI verification
    playwright: { command: 'npx', args: ['-y', '@playwright/mcp'] },
    // GitHub repo architecture docs on demand
    deepwiki: { command: 'npx', args: ['-y', 'deepwiki-mcp'] },
  };

  if ([...slugs].some((s) => s.includes('supabase'))) {
    servers.supabase = {
      command: 'npx',
      args: ['-y', '@supabase/mcp-server-supabase@latest', '--read-only'],
      env: { SUPABASE_ACCESS_TOKEN: '${SUPABASE_ACCESS_TOKEN}' },
    };
  }

  if ([...slugs].some((s) => s.includes('github') || s.includes('ci'))) {
    servers.github = {
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-github'],
      env: { GITHUB_PERSONAL_ACCESS_TOKEN: '${GITHUB_TOKEN}' },
    };
  }

  return JSON.stringify({ mcpServers: servers }, null, 2);
}

// ---------------------------------------------------------------------------
// .claude/settings.json — permissions + hooks skeleton + UI
// ---------------------------------------------------------------------------

function buildClaudeSettings(selectedSlugs, appName) {
  const slugs = new Set(selectedSlugs);
  const allowedBash = ['pnpm run *', 'npm run *', 'npx *', 'git *', 'node *'];
  if ([...slugs].some((s) => s.includes('supabase'))) allowedBash.push('supabase *');

  return {
    enableAllProjectMcpServers: true,
    env: {
      CLAUDE_AUTOCOMPACT_PCT_OVERRIDE: '80',
    },
    permissions: {
      allow: [
        ...allowedBash.map((c) => `Bash(${c})`),
        'Edit(**)',
        'Read(**)',
        'Write(**)',
        'mcp__context7__*',
        'mcp__playwright__*',
        'mcp__deepwiki__*',
        'mcp__supabase__*',
        'mcp__github__*',
      ],
      ask: [
        'Bash(rm *)',
        'Bash(rmdir *)',
        'Bash(chmod *)',
        'Bash(curl *)',
        'Bash(wget *)',
      ],
      deny: [],
    },
    // Hooks skeleton — fill in your handler script path
    // See: https://code.claude.com/docs/en/hooks
    hooks: {
      // Uncomment and point to your hook handler:
      // command: 'python3 .claude/hooks/handler.py',
      // timeout: 5000,
      // async: true,
      triggers: [
        'PreToolUse',
        'PostToolUse',
        'SessionStart',
        'SessionEnd',
        'ContextWarning',
      ],
    },
    customization: {
      spinnerVerbs: [
        `Thinking about ${appName}...`,
        'Consulting the skills...',
        'Checking the playbook...',
        'Reading the codebase...',
        'Applying best practices...',
      ],
    },
  };
}

// ---------------------------------------------------------------------------
// .gemini/settings.json — context file config
// ---------------------------------------------------------------------------

function buildGeminiSettings() {
  return {
    context: {
      // Read all three context files — same content, one source of truth
      fileName: ['GEMINI.md', 'AGENTS.md', 'CLAUDE.md'],
    },
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export async function init() {
  console.log('\nskills-hub init\n');

  const detected  = await detectAppContext();
  const allSkills = await loadAllSkills();
  const allAgents = await loadAllAgents();
  const suggested = suggestSkills(allSkills, detected.stack);

  const iface = rl();

  try {
    const appName        = await ask(iface, 'App name', detected.name);
    const appDescription = await ask(iface, 'Short description', detected.description);

    const skillChoices = (suggested.length ? suggested : allSkills).map(({ slug, skill, playbook }) => ({
      name: slug, description: skill.displayName, slug, skill, playbook,
    }));

    console.log(
      suggested.length
        ? `\nDetected stack — showing ${suggested.length} suggested skills:`
        : `\nNo stack detected — showing all ${allSkills.length} skills:`
    );

    const selected = await askMulti(iface, 'Which skills to activate?', skillChoices);

    if (!selected.length) {
      console.log('No skills selected. Aborting.');
      iface.close();
      return;
    }

    iface.close();

    const selectedSlugs = selected.map((s) => s.slug);
    const slugSet       = new Set(selectedSlugs);
    const relevantAgents = allAgents.filter(
      (a) => Array.isArray(a.allowedSkills) && a.allowedSkills.some((s) => slugSet.has(s))
    );

    // 1. CLAUDE.md / AGENTS.md / GEMINI.md (lean, <200 lines, imports rules via @)
    const contextContent = buildContextContent(appName, appDescription, selected, relevantAgents);
    for (const filename of ['CLAUDE.md', 'AGENTS.md', 'GEMINI.md']) {
      await fs.writeFile(path.join(targetRoot, filename), contextContent, 'utf-8');
    }
    console.log('  CLAUDE.md / AGENTS.md / GEMINI.md');

    // 2. .claude/rules/ — split rules (stack, conventions, workflow)
    const rulesDir = path.join(targetRoot, '.claude', 'rules');
    await ensureDir(rulesDir);
    await fs.writeFile(path.join(rulesDir, 'stack.md'),       buildRulesStack(selected),    'utf-8');
    await fs.writeFile(path.join(rulesDir, 'conventions.md'), buildRulesConventions(),      'utf-8');
    await fs.writeFile(path.join(rulesDir, 'workflow.md'),    buildRulesWorkflow(),         'utf-8');
    console.log('  .claude/rules/ (stack, conventions, workflow)');

    // 3. .agents/skills/<slug>/ — Open Agent Skills Standard (Codex + Gemini)
    const openSkillsDir = path.join(targetRoot, '.agents', 'skills');
    for (const { slug, skill, playbook } of selected) {
      const skillDir = path.join(openSkillsDir, slug);
      await ensureDir(path.join(skillDir, 'agents'));
      await fs.writeFile(path.join(skillDir, 'SKILL.md'),              buildOpenSkillMd(skill, playbook), 'utf-8');
      await fs.writeFile(path.join(skillDir, 'agents', 'openai.yaml'), buildOpenAIYaml(slug, skill),      'utf-8');
    }
    console.log(`  .agents/skills/ (${selected.length} — Codex + Gemini)`);

    // 4. .claude/skills/<slug>/ — Claude with frontmatter (user-invocable, context:fork, allowed-tools)
    const claudeSkillsDir = path.join(targetRoot, '.claude', 'skills');
    for (const { slug, skill, playbook } of selected) {
      const skillDir = path.join(claudeSkillsDir, slug);
      await ensureDir(skillDir);
      await fs.writeFile(path.join(skillDir, 'SKILL.md'), buildClaudeSkillMd(slug, skill, playbook), 'utf-8');
    }
    console.log(`  .claude/skills/ (${selected.length} — Claude)`);

    // 5. .claude/commands/<slug>.md — slash commands with allowed-tools + context:fork
    const commandsDir = path.join(targetRoot, '.claude', 'commands');
    await ensureDir(commandsDir);
    for (const { slug, skill, playbook } of selected) {
      if (AGENT_ONLY_SLUGS.has(slug)) continue; // don't create slash commands for agent-only skills
      await fs.writeFile(path.join(commandsDir, `${slug}.md`), buildSlashCommand(slug, skill, playbook), 'utf-8');
    }
    await fs.writeFile(path.join(commandsDir, 'plan.md'), buildPlanCommand(appName), 'utf-8');
    const commandCount = selected.filter(({ slug }) => !AGENT_ONLY_SLUGS.has(slug)).length;
    console.log(`  .claude/commands/ (${commandCount} skills + /plan)`);

    // 6. .claude/agents/<agentId>.md — full frontmatter (model, maxTurns, memory, isolation, background, skills)
    if (relevantAgents.length) {
      const agentsDir = path.join(targetRoot, '.claude', 'agents');
      await ensureDir(agentsDir);
      for (const agent of relevantAgents) {
        await fs.writeFile(path.join(agentsDir, `${agent.agentId}.md`), buildAgentFile(agent, slugSet), 'utf-8');
      }
      console.log(`  .claude/agents/ (${relevantAgents.length})`);
    }

    // 7. .claude/agent-memory/<agentId>/MEMORY.md — persistent memory stubs (never overwrites)
    if (relevantAgents.length) {
      const memoryDir = path.join(targetRoot, '.claude', 'agent-memory');
      for (const agent of relevantAgents) {
        const memDir  = path.join(memoryDir, agent.agentId);
        await ensureDir(memDir);
        const memPath = path.join(memDir, 'MEMORY.md');
        try { await fs.access(memPath); } catch {
          await fs.writeFile(memPath, buildAgentMemoryStub(agent), 'utf-8');
        }
      }
      console.log(`  .claude/agent-memory/ (${relevantAgents.length} stubs)`);
    }

    // 8. .mcp.json — project-scoped, readable by all three tools
    const mcpJsonPath = path.join(targetRoot, '.mcp.json');
    let existingMcp = {};
    try { existingMcp = JSON.parse(await fs.readFile(mcpJsonPath, 'utf-8')); } catch { /* none */ }
    const mergedMcp = { mcpServers: { ...(existingMcp.mcpServers ?? {}), ...JSON.parse(buildMcpJson(selectedSlugs)).mcpServers } };
    await fs.writeFile(mcpJsonPath, JSON.stringify(mergedMcp, null, 2), 'utf-8');
    console.log('  .mcp.json (context7 + playwright + deepwiki + stack-specific)');

    // 9. .claude/settings.json — permissions + hooks skeleton + autoCompact + UI
    const claudeSettingsPath = path.join(targetRoot, '.claude', 'settings.json');
    await ensureDir(path.dirname(claudeSettingsPath));
    let existingCS = {};
    try { existingCS = JSON.parse(await fs.readFile(claudeSettingsPath, 'utf-8')); } catch { /* none */ }
    const newCS = buildClaudeSettings(selectedSlugs, appName);
    const mergedCS = {
      ...existingCS,
      enableAllProjectMcpServers: newCS.enableAllProjectMcpServers,
      env:         { ...(existingCS.env ?? {}), ...newCS.env },
      permissions: {
        allow: [...new Set([...(existingCS.permissions?.allow ?? []), ...newCS.permissions.allow])],
        ask:   [...new Set([...(existingCS.permissions?.ask   ?? []), ...newCS.permissions.ask])],
        deny:  [...new Set([...(existingCS.permissions?.deny  ?? []), ...newCS.permissions.deny])],
      },
      hooks:         existingCS.hooks ?? newCS.hooks,
      customization: { ...existingCS.customization, ...newCS.customization },
    };
    await fs.writeFile(claudeSettingsPath, JSON.stringify(mergedCS, null, 2), 'utf-8');
    console.log('  .claude/settings.json');

    // 10. .gemini/settings.json
    const geminiSettingsPath = path.join(targetRoot, '.gemini', 'settings.json');
    await ensureDir(path.dirname(geminiSettingsPath));
    let existingGS = {};
    try { existingGS = JSON.parse(await fs.readFile(geminiSettingsPath, 'utf-8')); } catch { /* none */ }
    await fs.writeFile(geminiSettingsPath, JSON.stringify({ ...existingGS, ...buildGeminiSettings() }, null, 2), 'utf-8');
    console.log('  .gemini/settings.json');

    console.log(`
Done! ${selected.length} skill(s), ${relevantAgents.length} agent(s) installed.

  CLAUDE.md / AGENTS.md / GEMINI.md   context for all 3 tools (lean, <200 lines)
  .claude/rules/                       stack · conventions · workflow rules
  .agents/skills/                      open standard (Codex + Gemini)
  .claude/skills/                      Claude skills (user-invocable/agent-only, fork context)
  .claude/commands/                    slash commands (allowed-tools, context:fork where needed)
  .claude/agents/                      agents (model · maxTurns · memory · isolation · background)
  .claude/agent-memory/                persistent memory stubs (never overwritten on re-run)
  .mcp.json                            context7 · playwright · deepwiki · stack-specific
  .claude/settings.json                permissions · hooks skeleton · autoCompact@80%
  .gemini/settings.json                context file config

Next steps:
  1. Commit everything above
  2. Add .claude/agent-memory/ to .gitignore if memory should stay local
  3. Set env vars: SUPABASE_ACCESS_TOKEN, GITHUB_TOKEN (if those MCPs were added)
  4. In Claude Code: /config → Output Style → Explanatory
  5. Uncomment hooks.command in .claude/settings.json to wire up lifecycle hooks
  6. Use /plan <feature> to start the cross-model planning workflow
  7. Re-run "npx skills-hub init" when new skills are added
`);
  } catch (err) {
    iface.close();
    throw err;
  }
}
