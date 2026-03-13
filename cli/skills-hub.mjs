#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { toCodex } from '../adapters/codex/adapter.mjs';
import { toClaude } from '../adapters/claude/adapter.mjs';
import { toGemini } from '../adapters/gemini/adapter.mjs';
import { generateContextFiles } from '../context/adapter.mjs';
import { init } from './init.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const command = args[0];
const targetIdx = args.indexOf('--target');
const target = targetIdx > -1 ? args[targetIdx + 1] : 'all';
const projectIdx = args.indexOf('--project');
const projectInput = projectIdx > -1 ? args[projectIdx + 1] : null;
const outIdx = args.indexOf('--out');
const outDir = outIdx > -1 ? args[outIdx + 1] : null;
const runnerIdx = args.indexOf('--runner');
const runner = runnerIdx > -1 ? args[runnerIdx + 1] : 'generic';

function runYqFromPython(inputYaml) {
  const code = `import yaml, json, sys; print(json.dumps(yaml.safe_load(sys.stdin.read())))`;
  const out = spawnSync('python3', ['-c', code], { input: inputYaml, encoding: 'utf-8' });
  if (out.status !== 0) {
    throw new Error(`Falha ao parsear YAML: ${out.stderr}`);
  }
  return JSON.parse(out.stdout);
}

async function listSkillDirs() {
  const coreDir = path.join(root, 'core');
  const entries = await fs.readdir(coreDir, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => path.join(coreDir, e.name));
}

async function readSkill(skillDir) {
  const yamlPath = path.join(skillDir, 'skill.yaml');
  const raw = await fs.readFile(yamlPath, 'utf-8');
  const skill = runYqFromPython(raw);
  return { skill, skillDir, slug: path.basename(skillDir) };
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function writeFiles(base, files) {
  for (const f of files) {
    const full = path.join(base, f.path);
    await ensureDir(path.dirname(full));
    await fs.writeFile(full, f.content, 'utf-8');
  }
}

async function validate() {
  const schemaPath = path.join(root, 'schemas', 'skill.schema.json');
  const schema = JSON.parse(await fs.readFile(schemaPath, 'utf-8'));
  const required = schema.required ?? [];

  const dirs = await listSkillDirs();
  if (!dirs.length) throw new Error('Nenhuma skill encontrada em core/.');

  for (const dir of dirs) {
    const { skill, slug } = await readSkill(dir);
    for (const field of required) {
      if (!(field in skill)) {
        throw new Error(`Skill ${slug}: campo obrigatório ausente -> ${field}`);
      }
    }
  }

  console.log(`OK: ${dirs.length} skill(s) validadas.`);
}

async function build() {
  const dirs = await listSkillDirs();
  const targets = target === 'all' ? ['codex', 'claude', 'gemini'] : [target];

  for (const dir of dirs) {
    const { skill, slug, skillDir } = await readSkill(dir);

    const playbook = await fs.readFile(path.join(skillDir, 'playbook.md'), 'utf-8');
    skill.description = `${skill.description} Base operacional: ${playbook.split('\n').slice(0, 6).join(' ').trim()}`;

    for (const t of targets) {
      const outBase = path.join(root, 'dist', t, slug);
      await ensureDir(outBase);
      if (t === 'codex') await writeFiles(outBase, toCodex(skill).files);
      if (t === 'claude') await writeFiles(outBase, toClaude(skill).files);
      if (t === 'gemini') await writeFiles(outBase, toGemini(skill).files);
      console.log(`Built ${slug} -> ${t}`);
    }
  }
}

// ---------------------------------------------------------------------------
// Audit: generate per-phase prompts for Codex
// ---------------------------------------------------------------------------

const AUDIT_PHASES = [
  {
    id: 1,
    slug: 'architecture',
    displayName: 'Arquitetura & Estrutura',
    objective:
      'Avaliar boundaries de domínio, organização de pacotes, estratégias RSC/Client e governança de monorepo.',
    coreSkills: [
      'react-frontend-architecture',
      'next15-app-router-architecture',
      'monorepo-frontend-governance',
    ],
    importSkills: ['nextjs-mastery'],
  },
  {
    id: 2,
    slug: 'components',
    displayName: 'Componentes & Design System',
    objective:
      'Avaliar padrões de componentes React 19, uso de shadcn/ui, tokens de design e acessibilidade.',
    coreSkills: ['react19-component-patterns', 'shadcn-design-system-ops'],
    importSkills: ['master-ux-ui', 'shadcn-dark-design', 'react-patterns'],
  },
  {
    id: 3,
    slug: 'data',
    displayName: 'Dados & Infraestrutura',
    objective:
      'Avaliar gestão de estado de servidor, query keys, cache, invalidação, schema Supabase e RLS.',
    coreSkills: ['tanstack-query-governance'],
    importSkills: ['supabase-expert'],
  },
  {
    id: 4,
    slug: 'ux',
    displayName: 'UX & Experiência',
    objective:
      'Avaliar carga cognitiva, loops comportamentais, acessibilidade, ética de formulários e sustentabilidade.',
    coreSkills: [],
    importSkills: [
      'ux-cognitive-architecture',
      'ux-behavioral-loop',
      'ux-visual-systems',
      'ux-cpa-orchestrator',
      'ux-emotional-stakeholder',
      'ux-ethics-bias',
      'ux-lean-experimentation',
      'ux-sustainable-product',
      'ui-ux-operations',
    ],
  },
  {
    id: 5,
    slug: 'testing',
    displayName: 'Qualidade & Testes',
    objective:
      'Avaliar cobertura de comportamento, confianca da suite e estrategia de mocks segundo Testing Trophy.',
    coreSkills: ['kent-c-dodds-testing'],
    importSkills: [],
  },
];

async function readImportSkill(project, skillName) {
  const p = path.join(root, 'imports', 'gemini', project, skillName, 'SKILL.md');
  try {
    return await fs.readFile(p, 'utf-8');
  } catch {
    return null;
  }
}

async function readCoreSkillFull(skillName) {
  const dir = path.join(root, 'core', skillName);
  try {
    const { skill } = await readSkill(dir);
    const playbook = await fs.readFile(path.join(dir, 'playbook.md'), 'utf-8');
    const workflow = skill.workflow.map((w) => `${w.step}. ${w.action}`).join('\n');
    const outputs = skill.outputContract.map((o, i) => `${i + 1}. ${o}`).join('\n');
    return [
      `---`,
      `name: ${skill.name}`,
      `description: ${skill.description}`,
      `---`,
      `# ${skill.displayName}`,
      ``,
      `## Stack`,
      `- ${skill.stack.framework}`,
      `- ${skill.stack.react}`,
      `- ${skill.stack.serverState}`,
      `- ${skill.stack.ui}`,
      `- ${skill.stack.workspace}`,
      ``,
      `## Workflow`,
      workflow,
      ``,
      `## Output esperado`,
      outputs,
      ``,
      playbook,
    ].join('\n');
  } catch {
    return null;
  }
}

function buildPhasePrompt(phase, skillBlocks, projectPath) {
  const skillsSection = skillBlocks
    .map((s) => `### ${s.name}\n<skill>\n${s.content.trim()}\n</skill>`)
    .join('\n\n');

  return `# Auditoria — Fase ${phase.id}: ${phase.displayName}
Projeto: ${projectPath}

## Objetivo
${phase.objective}

## Skills ativas nesta fase

${skillsSection}

## Instruções de execução

1. **SCAN** — Leia a estrutura do projeto e os arquivos relevantes para esta fase.
2. **DIAGNOSE** — Liste todos os achados por severidade:
   - 🔴 Crítico — viola regra obrigatória de uma skill, causa bug ou debt grave.
   - 🟡 Médio — melhoria importante, risco moderado.
   - 🟢 Sugestão — refinamento de qualidade.
   Cada achado deve citar: **arquivo**, **linha**, **regra violada**, **skill de origem**.
3. **FIX** — Aplique correções em diffs pequenos e atômicos.
   - Para cada fix: explique a intenção + aplique a mudança.
   - Priorize 🔴 antes de 🟡. Ignore 🟢 se houver muitos achados críticos.
4. **VERIFY** — Rode os comandos de verificação após cada lote:
   \`\`\`
   pnpm lint
   pnpm build
   \`\`\`
   Se quebrar, ajuste até passar.
5. **REPORT** — Gere saída estruturada ao final:
   - **summary**: o que mudou e por quê
   - **files_changed**: lista de arquivos alterados
   - **risks**: pendências e próximos passos

## Regras
- NÃO altere lógica de negócio sem justificativa explícita.
- Se uma correção tem risco alto, apenas reporte sem aplicar.
- Mantenha commits pequenos e atômicos se o projeto estiver sob git.
`;
}

function isLikelyPath(v) {
  if (!v) return false;
  return v.includes('/') || v.startsWith('.') || v.startsWith('~');
}

function normalizeProjectInput(v) {
  if (!v) return { projectName: null, projectPath: null };
  if (isLikelyPath(v)) {
    const normalized = v.startsWith('~') ? v : path.resolve(v);
    return { projectName: path.basename(normalized), projectPath: normalized };
  }
  return { projectName: v, projectPath: `~/workspaces/personal/${v}` };
}

function buildMasterPrompt({ projectPath, projectName, runnerName, phaseOutputs }) {
  const phaseIndex = phaseOutputs
    .map(
      ({ phase, blocks }) =>
        `- Fase ${phase.id} (${phase.displayName}): ${blocks.length} skill(s) [${blocks
          .map((b) => b.name)
          .join(', ')}]`
    )
    .join('\n');

  const phaseBodies = phaseOutputs.map(({ prompt }) => prompt.trim()).join('\n\n---\n\n');

  return `# MASTER AUDIT PROMPT
Runner alvo: ${runnerName}
Projeto: ${projectPath}
Projeto (imports): ${projectName}

## Objetivo
Executar uma auditoria técnica e de UX em pipeline, aplicando todas as skills abaixo em 4 fases.

## Índice de fases
${phaseIndex}

## Protocolo de execução
1. Execute as fases em ordem: 1 → 2 → 3 → 4.
2. Em cada fase: SCAN, DIAGNOSE, FIX, VERIFY, REPORT.
3. Preserve mudanças válidas de fases anteriores; não reverta correções já aplicadas.
4. Se uma mudança for arriscada, reporte e não aplique.
5. No final da fase 4, gere um relatório consolidado:
   - summary
   - files_changed
   - open_risks
   - next_steps

${phaseBodies}
`;
}

async function audit() {
  if (!projectInput) {
    throw new Error(
      'Use: skills-hub audit --project <nome|caminho> [--out <dir>] [--runner gemini|claude|warp|generic]\n' +
        '  <nome> deve existir em imports/gemini/<nome>/'
    );
  }

  const { projectName, projectPath } = normalizeProjectInput(projectInput);
  const importsDir = path.join(root, 'imports', 'gemini', projectName);
  try {
    await fs.access(importsDir);
  } catch {
    throw new Error(`Projeto não encontrado: ${importsDir}`);
  }

  const dest = outDir || path.join(root, 'dist', 'audit', projectName);
  await ensureDir(dest);

  let totalSkills = 0;
  const phaseOutputs = [];

  for (const phase of AUDIT_PHASES) {
    const blocks = [];

    for (const name of phase.coreSkills) {
      const content = await readCoreSkillFull(name);
      if (content) blocks.push({ name, content });
    }
    for (const name of phase.importSkills) {
      const content = await readImportSkill(projectName, name);
      if (content) blocks.push({ name, content });
    }

    if (!blocks.length) {
      console.log(`⏭  Fase ${phase.id} (${phase.slug}): nenhuma skill encontrada, pulando.`);
      continue;
    }

    const prompt = buildPhasePrompt(phase, blocks, projectPath);
    const filename = `phase-${phase.id}-${phase.slug}.md`;
    await fs.writeFile(path.join(dest, filename), prompt, 'utf-8');
    phaseOutputs.push({ phase, blocks, prompt, filename });
    totalSkills += blocks.length;
    console.log(`✅ ${filename} — ${blocks.length} skill(s)`);
  }

  if (phaseOutputs.length) {
    const master = buildMasterPrompt({
      projectPath,
      projectName,
      runnerName: runner,
      phaseOutputs,
    });
    await fs.writeFile(path.join(dest, 'AUDIT_PROMPT.md'), master, 'utf-8');
    console.log('✅ AUDIT_PROMPT.md — prompt master consolidado');
  }

  console.log(`\n${totalSkills} skills em ${AUDIT_PHASES.length} fases → ${dest}`);
}

(async () => {
  try {
    if (command === 'init') await init();
    else if (command === 'validate') await validate();
    else if (command === 'build') await build();
    else if (command === 'context') await generateContextFiles();
    else if (command === 'audit') await audit();
    else {
      console.log(
        'Uso: skills-hub <init|validate|build|context|audit> [--target codex|claude|gemini] [--project <nome|caminho>] [--out <dir>] [--runner gemini|claude|warp|generic]'
      );
      process.exit(1);
    }
  } catch (err) {
    console.error(err.message || err);
    process.exit(1);
  }
})();
