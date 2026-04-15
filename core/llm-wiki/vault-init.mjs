#!/usr/bin/env node
/**
 * llm-wiki vault-init
 *
 * Generic vault initializer for the LLM Wiki pattern.
 * macOS / Linux only. Node.js >= 18. No dependencies.
 *
 * Creates:
 *   raw/         — immutable source documents
 *   wiki/        — LLM-owned knowledge (concepts, entities, sources, overviews)
 *   _schema.md   — rules file
 *   index.md     — content catalog
 *   log.md       — operation log
 *   sessions/    — optional session-scoped memory (--sessions flag)
 *
 * Usage:
 *   node vault-init.mjs                          # wiki only (requires $OBSIDIAN_VAULT_DIR)
 *   node vault-init.mjs --sessions               # wiki + sessions
 *   node vault-init.mjs --sessions my-research   # wiki + named session
 *   OBSIDIAN_VAULT_DIR=~/my-vault node vault-init.mjs
 *
 * Env vars:
 *   OBSIDIAN_VAULT_DIR  — vault path (REQUIRED, no default)
 */

import fs from 'fs';
import path from 'path';
import os from 'os';
import readline from 'readline';

// ─── Constants ───────────────────────────────────────────────────────────────

const TODAY = new Date().toISOString().slice(0, 10);
const HOME = os.homedir();

// ─── Helpers ─────────────────────────────────────────────────────────────────

function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => rl.question(question, answer => { rl.close(); resolve(answer.trim()); }));
}

function writeIfAbsent(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

// ─── File templates — Schema ─────────────────────────────────────────────────

const schemaMd = `# Schema

> Rules for AI agents operating on this vault.

## Purpose
<!-- Customize this line to define what this vault is for. -->
<!-- Examples: "Research on distributed systems", "Trip planning for Japan 2026", "ML paper reading group" -->

## Language
English for all vault content.

## Active layers
- [x] wiki (concepts, entities, sources, overviews)
- [x] raw (immutable source documents)
- [ ] sessions (session logs and structured reasoning)

## Page types
| Type | Location | Required sections |
|------|----------|-------------------|
| Concept | \`wiki/concepts/<slug>.md\` | Definition, Sources, Connections |
| Entity | \`wiki/entities/<slug>.md\` | What it is, Usage, Sources, Connections |
| Source summary | \`wiki/sources/<slug>.md\` | Summary, Key learnings, Quotes, Extracted concepts |
| Overview | \`wiki/overviews/<slug>.md\` | Thesis, Evidence, Gaps, Sources |

## Conventions
- Slugs: kebab-case, no accents (e.g., \`cache-invalidation\`, \`tanstack-query\`)
- Dates: YYYY-MM-DD
- Links: always \`[[wiki/concepts/slug]]\` or \`[[wiki/entities/slug]]\`
- Tags: \`#concept\`, \`#entity\`, \`#source\`, \`#overview\`
- Every wiki page must cite at least one source in \`## Sources\`

## Ingest flow
1. Save raw source to \`raw/YYYY-MM-DD-<slug>/\` (immutable after creation)
2. Create source summary page in \`wiki/sources/\`
3. Extract concepts and entities; create or update wiki pages
4. Update \`index.md\` with new pages
5. Append entry to \`log.md\`

## Query flow
1. Read \`index.md\` to find relevant pages
2. Read the relevant wiki pages
3. Synthesize answer with citations: \`(Source: [[raw/YYYY-MM-DD-slug/source]])\`
4. If the answer is valuable, offer to file it as a new wiki page (overview or concept)
5. If info not found, say so explicitly

## Lint rules
- Orphan pages: wiki pages with zero inbound links → report
- Broken links: \`[[...]]\` pointing to non-existent files → report
- Missing backlinks: A→B but not B→A → suggest
- Empty sources: wiki pages without \`## Sources\` entries → report
- Duplicates: same topic under different slugs → suggest merge
- Stale claims: newer sources contradict older wiki content → flag
`;

// ─── File templates — Index & Log ────────────────────────────────────────────

const indexMd = `# Index

> Catalog of everything in this wiki. Read this first to locate knowledge.

## Concepts
<!-- - [[wiki/concepts/slug]] — one-line description -->

## Entities
<!-- - [[wiki/entities/slug]] — one-line description -->

## Sources
<!-- - [[wiki/sources/slug]] — title (YYYY-MM-DD) -->

## Overviews
<!-- - [[wiki/overviews/slug]] — one-line description -->

## Recent activity
<!-- Last 10 log entries for quick context -->
`;

const logMd = `# Log

> Append-only chronological record of wiki operations.
> Each entry: \`## [YYYY-MM-DD] <operation> | <title>\`

## [${TODAY}] init | Vault initialized
Structure created: raw/, wiki/, _schema.md, index.md, log.md
`;

// ─── File templates — Session layer (optional) ──────────────────────────────

function sessionReadmeMd(sessionId) {
  return `# ${sessionId}

> Session context and history.

## Objective
<!-- What this session is about -->

## Started
${TODAY}

## Sessions
- [[sessions/${sessionId}/log/${TODAY}|${TODAY} — initial session]]

## Decisions
<!-- Links to important thinking/ files -->

## Status
- [ ] In progress
- [ ] Done

## Links
<!-- Links to relevant resources -->
`;
}

function sessionLogMd(sessionId) {
  return `# Session — ${sessionId} — ${TODAY}

## Task
<!-- What is being worked on today -->

## 🧠 Reasoning
<!-- Non-trivial decisions made today with justification -->

## What was done
<!-- Summary of changes and outcomes -->

## Open threads
<!-- Unresolved questions for next session -->

## Next steps
<!-- What to do next session -->
`;
}

const thinkingReadmeMd = `# Thinking

> Structured reasoning for decisions in this session.
> File format: YYYY-MM-DD-topic.md

## When to use which framework

| Situation | Framework |
|----------|-----------|
| Starting a new task | 5W2H |
| Investigating a failure | 5 Whys |
| Architecture / tech / pattern choice | ADR |
| Implementing something risky | Pre-mortem |
| Choosing between approaches | RICE |
| Quick decision (2 options) | Inline 🧠 Reasoning in session log |

## Templates

### 5W2H
\`\`\`markdown
# 5W2H: <Topic>
Date: YYYY-MM-DD | Framework: 5W2H | Status: done | open | abandoned

## What
## Why
## Who
## Where
## When
## How
## How much (cost/effort)
\`\`\`

### 5 Whys
\`\`\`markdown
# 5 Whys: <Topic>
Date: YYYY-MM-DD | Framework: 5 Whys

## Symptom
## Why 1
## Why 2
## Why 3
## Why 4
## Why 5 (root cause)
## Fix
\`\`\`

### ADR
\`\`\`markdown
# ADR: <Title>
Date: YYYY-MM-DD | Framework: ADR | Status: proposed | accepted | superseded

## Context
## Decision
## Options considered
### Option A: <name> — rejected: <why>
### Option B: <name> ✓ chosen — why: <reason>
## Consequences
\`\`\`

### Pre-mortem
\`\`\`markdown
# Pre-mortem: <Feature or Change>
Date: YYYY-MM-DD | Framework: Pre-mortem

## What we will do
## It's 3 months later and it failed. What went wrong?
### Risk 1: <name> — Likelihood: high|medium|low — Impact: high|medium|low — Mitigation: <what>
## Go / No-go
\`\`\`

### RICE
\`\`\`markdown
# RICE: <Decision>
Date: YYYY-MM-DD | Framework: RICE

| Option | Reach | Impact | Confidence | Effort | Score |
|--------|-------|--------|------------|--------|-------|
| A      |       |        |            |        |       |
| B      |       |        |            |        |       |

## Winner: <option>
## Rationale:
\`\`\`
`;

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const sessionsFlag = args.includes('--sessions');
  const positionalArgs = args.filter(a => !a.startsWith('--'));

  // Vault path: $OBSIDIAN_VAULT_DIR or first positional arg
  const vaultDir = process.env.OBSIDIAN_VAULT_DIR ?? positionalArgs.shift() ?? null;

  if (!vaultDir) {
    console.error('❌ Vault path required. Set $OBSIDIAN_VAULT_DIR or pass it as first argument.');
    console.error('   Usage: OBSIDIAN_VAULT_DIR=~/my-vault node vault-init.mjs');
    console.error('   Usage: node vault-init.mjs ~/my-vault');
    process.exit(1);
  }

  const resolvedVaultDir = vaultDir.startsWith('~')
    ? path.join(HOME, vaultDir.slice(1))
    : path.resolve(vaultDir);

  console.log(`🧠 LLM Wiki — vault-init`);
  console.log(`   → ${resolvedVaultDir}`);

  // ── Core wiki structure (always created) ──
  writeIfAbsent(path.join(resolvedVaultDir, '_schema.md'), schemaMd);
  writeIfAbsent(path.join(resolvedVaultDir, 'index.md'), indexMd);
  writeIfAbsent(path.join(resolvedVaultDir, 'log.md'), logMd);

  fs.mkdirSync(path.join(resolvedVaultDir, 'raw'), { recursive: true });
  fs.mkdirSync(path.join(resolvedVaultDir, 'wiki', 'concepts'), { recursive: true });
  fs.mkdirSync(path.join(resolvedVaultDir, 'wiki', 'entities'), { recursive: true });
  fs.mkdirSync(path.join(resolvedVaultDir, 'wiki', 'sources'), { recursive: true });
  fs.mkdirSync(path.join(resolvedVaultDir, 'wiki', 'overviews'), { recursive: true });

  // ── Session layer (optional) ──
  let sessionId = null;

  if (sessionsFlag) {
    sessionId = positionalArgs.shift() ?? null;
    if (!sessionId) {
      sessionId = await ask('   Enter session name (e.g. my-research, sprint-42): ');
      if (!sessionId) { console.error('❌ Session name required. Aborting.'); process.exit(1); }
    }

    const sessionDir = path.join(resolvedVaultDir, 'sessions', sessionId);
    console.log(`   → Session: ${sessionDir}`);

    writeIfAbsent(path.join(sessionDir, 'README.md'), sessionReadmeMd(sessionId));
    writeIfAbsent(path.join(sessionDir, 'log', `${TODAY}.md`), sessionLogMd(sessionId));
    writeIfAbsent(path.join(sessionDir, 'thinking', 'README.md'), thinkingReadmeMd);

    // Enable sessions in _schema.md
    const schemaPath = path.join(resolvedVaultDir, '_schema.md');
    const schemaContent = fs.readFileSync(schemaPath, 'utf8');
    if (schemaContent.includes('- [ ] sessions')) {
      fs.writeFileSync(
        schemaPath,
        schemaContent.replace('- [ ] sessions', '- [x] sessions'),
        'utf8',
      );
    }
  }

  console.log('');
  console.log('✅ Vault ready!');
  console.log('');
  console.log(`   Vault   : ${resolvedVaultDir}`);
  console.log(`   Schema  : ${path.join(resolvedVaultDir, '_schema.md')}`);
  console.log(`   Index   : ${path.join(resolvedVaultDir, 'index.md')}`);
  console.log(`   Log     : ${path.join(resolvedVaultDir, 'log.md')}`);
  if (sessionId) {
    console.log(`   Session : ${path.join(resolvedVaultDir, 'sessions', sessionId)}`);
  }
  console.log('');
  console.log('   Next: set $OBSIDIAN_VAULT_DIR and customize _schema.md purpose line.');
}

main().catch(err => { console.error(err); process.exit(1); });
