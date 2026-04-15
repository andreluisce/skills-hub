# Conceitos Fundamentais

Este documento explica os conceitos centrais do skills-hub e como eles se conectam quando instalados em um projeto.

## Visao Geral

O skills-hub empacota conhecimento de dominio em artefatos estruturados que ferramentas de AI (Claude, Codex, Gemini, Cursor) conseguem consumir. Quando voce roda `npx skills-hub init` em um projeto, ele gera arquivos de contexto e instrucoes que orientam o comportamento da AI durante o desenvolvimento.

```
skills-hub (generico)          projeto-alvo (especializado)
─────────────────────          ────────────────────────────
core/                    ───►  .claude/skills/
agents/                  ───►  .claude/agents/
context/                 ───►  CLAUDE.md, AGENTS.md
adapters/                ───►  .codex/, .gemini/, .cursor/
```

---

## Ficheiros de Contexto por LLM

Cada ferramenta de AI le contexto de ficheiros e diretorios diferentes. O skills-hub gera artefatos para todas elas a partir da mesma source of truth.

### Ficheiros raiz (contexto de projeto)

| Ficheiro | Consumido por | Carregamento |
|----------|--------------|--------------|
| `CLAUDE.md` | Claude Code | Automatico — inicio de toda conversa |
| `AGENTS.md` | Codex (OpenAI) | Automatico — contexto principal |
| `GEMINI.md` | Gemini CLI | Automatico — contexto de projeto |

Todos contem a mesma informacao base (stack, convencoes, estrutura), adaptada ao formato que cada tool espera. Sao gerados por `pnpm run context` no skills-hub e por `npx skills-hub init` no projeto-alvo.

### Diretorios de agents

| Diretorio | Consumido por | Formato |
|-----------|--------------|---------|
| `.claude/agents/*.md` | Claude Code | Markdown com frontmatter YAML (name, tools) |
| `.codex/agents/*.md` | Codex | Markdown puro (sem frontmatter) |
| `.gemini/agents/*.json` | Gemini | JSON com `instruction` + `metadata` (triggers, tools) |
| `.cursor/rules/agents/*.mdc` | Cursor | Markdown com Activation Hints |

O conteudo e o mesmo — purpose, focus, skills, guidelines. O que muda e o formato e campos extras que cada tool precisa:

- **Claude**: frontmatter com `tools:` define quais ferramentas o agent pode usar
- **Codex**: sem frontmatter, o conteudo markdown e o bastante
- **Gemini**: JSON estruturado com `triggers` para ativacao e `tools` para permissoes
- **Cursor**: `.mdc` com `## Activation Hints` que funcionam como triggers

### Diretorios de skills

| Diretorio | Consumido por | Formato |
|-----------|--------------|---------|
| `.claude/skills/<slug>/CLAUDE_SKILL.md` | Claude Code | Markdown com `description` no frontmatter |
| `.codex/skills/<slug>/SKILL.md` | Codex | Markdown puro |
| `.gemini/skills/<slug>/gemini-skill.json` | Gemini | JSON com instruction e metadata |

Skills funcionam igual em todas as tools: sao modulos de conhecimento carregados por relevancia. O campo `description` (ou equivalente) e o que a AI usa para decidir quando aplicar a skill.

### Exemplo concreto: mesma skill em 3 formatos

**Claude** (`.claude/skills/kent-c-dodds-testing/CLAUDE_SKILL.md`):
```markdown
---
description: Testing strategy with Kent C. Dodds principles...
---
# Kent C. Dodds Testing Strategy
## Perform rules
- Preferir testes de integracao...
```

**Codex** (`.codex/skills/kent-c-dodds-testing/SKILL.md`):
```markdown
# Kent C. Dodds Testing Strategy
## Perform rules
- Preferir testes de integracao...
```

**Gemini** (`.gemini/skills/kent-c-dodds-testing/gemini-skill.json`):
```json
{
  "name": "kent-c-dodds-testing",
  "instruction": "# Kent C. Dodds Testing Strategy\n## Perform rules\n- Preferir testes de integracao...",
  "metadata": { "triggers": ["test", "vitest"] }
}
```

---

## CLAUDE.md

**O que e:** arquivo de contexto na raiz do projeto. Claude Code carrega automaticamente no inicio de toda conversa.

**Para que serve:** dar ao Claude orientacao de alto nivel sobre o projeto — stack, convencoes, onde encontrar documentacao, e quais regras seguir.

**Caracteristicas:**
- Carregado automaticamente — nao precisa ser referenciado
- Deve ser conciso e apontar para docs detalhados em vez de repetir conteudo
- Especifico do projeto (nao generico)
- Equivalentes em outros tools: `AGENTS.md` (Codex), `GEMINI.md` (Gemini)

**Exemplo tipico:**
```markdown
# Instrucoes

- app principal: `apps/backoffice`
- usar scripts reais do repo, nao inventar
- preferir instrucoes do repo sobre heuristicas genericas
```

---

## AGENTS.md

**O que e:** documento de referencia que descreve todos os agents disponiveis no projeto, suas responsabilidades e limites.

**Para que serve:** ser o source of truth sobre quem faz o que no sistema multi-agente. Tanto humanos quanto AI tools consultam este arquivo para entender a divisao de responsabilidades.

**Caracteristicas:**
- Codex usa como contexto principal (equivalente ao CLAUDE.md do Claude)
- Lista agents com purpose, focus, allowed skills e constraints
- Define fronteiras claras — o que cada agent faz e o que nao faz

---

## Agents

**O que e:** subprocessos especializados com escopo restrito. Cada agent tem um papel, ferramentas permitidas, e skills associadas.

**Para que serve:** dividir o trabalho em especialidades. Em vez de um unico prompt fazer tudo, agents focados lidam com dominios especificos (seguranca, testes, performance, UX, etc).

**Como funciona:**
- O usuario (ou outro agent) lanca um agent para resolver um problema especifico
- O agent tem acesso apenas as ferramentas listadas no seu contrato
- O agent consulta suas skills associadas como base de conhecimento
- Ao terminar, retorna o resultado ao contexto principal

**Formato no skills-hub** (`agents/<role>.agent.yaml`):
```yaml
agentId: qa-dev
purpose: Define and enforce quality standards
allowedSkills:
  - kent-c-dodds-testing
  - e2e-testing-playwright
allowedTools:
  - mcp.filesystem
constraints:
  - Tests must test behavior, not implementation
humanApproval:
  requiredFor:
    - lowering-coverage-thresholds
```

**Formato instalado no projeto** (`.claude/agents/<role>.md`):
```markdown
---
name: frontend-test-engineer
tools:
  - Read
  - Edit
  - Bash
---

# Frontend Test Engineer

## Skills
- `kent-c-dodds-testing` — Testing Trophy, user-event, MSW

## Guidelines
- prefer integration tests for feature confidence
```

**Diferenca entre generico e instalado:**
- No skills-hub, o agent e generico (ex: `qa-dev` serve para qualquer projeto)
- Ao instalar, ele e especializado para o projeto (ex: `frontend-test-engineer` com referencias a `@perform/ui`, CASL, smart-mocks)

---

## Skills

**O que e:** modulos de conhecimento estruturado sobre um dominio ou tecnica. Nao executam codigo — informam decisoes.

**Para que serve:** dar profundidade de conhecimento ao agent (ou ao Claude diretamente) sobre como resolver um tipo especifico de problema.

**Como funciona:**
- Skills sao carregadas contextualmente — a AI decide quando aplica-las baseado no campo `description`
- Estao sempre disponiveis, nao apenas quando um agent e invocado
- Agents referenciam skills na secao `## Skills` para garantir que as consultem explicitamente
- Cada skill contem: objetivo, trigger, regras, tecnicas e exemplos reais

**Formato no skills-hub** (`core/<slug>/skill.yaml` + `core/<slug>/playbook.md`):
```yaml
# skill.yaml
name: kent-c-dodds-testing
displayName: Kent C. Dodds Testing Strategy
triggers:
  - test
  - vitest
  - testing library
workflow:
  - Map critical user flows
  - Define practical pyramid with Testing Trophy
  - Write tests from user perspective
  - Replace fragile mocks with MSW
```

```markdown
# playbook.md
## Objetivo
Maximizar confianca no comportamento com testes que refletem impacto real.

## Regras
- Preferir testes de integracao como camada padrao
- Usar @testing-library/user-event e queries acessiveis
- Mock na fronteira de rede, nao em hooks internos
```

**Formato instalado no projeto** (`.claude/skills/<slug>/CLAUDE_SKILL.md`):
```markdown
---
description: Testing strategy with Kent C. Dodds principles...
---

# Kent C. Dodds Testing Strategy

## Perform rules
- Preferir testes de integracao para features
- Mock na fronteira de rede (MSW), nao em hooks locais
- Cobertura especial para auth, middleware e CASL
```

**Diferenca entre generico e instalado:**
- No skills-hub: regras universais (ex: "use accessible queries")
- Instalado: regras contextualizadas ao projeto (ex: "cobertura especial para CASL e smart-mocks")

---

## Como tudo se conecta

```
Usuario pede: "escreva testes para o form de criacao de loja"

1. Claude le CLAUDE.md
   → sabe que o app principal e apps/backoffice

2. Claude lanca o agent frontend-test-engineer
   → agent tem escopo restrito (Read, Edit, Bash)
   → agent ve que deve consultar kent-c-dodds-testing

3. Agent consulta a skill kent-c-dodds-testing
   → aprende: Testing Trophy, user-event, MSW, mock na fronteira
   → aprende (Perform-specific): cobrir auth, CASL, smart-mocks

4. Agent escreve os testes seguindo as regras
   → retorna resultado ao contexto principal
```

---

## Relacao Agent ↔ Skill

Agents e skills sao complementares:

| Aspecto | Agent | Skill |
|---------|-------|-------|
| **Natureza** | Processo (executa) | Conhecimento (informa) |
| **Ativacao** | Lancado explicitamente | Carregada por relevancia |
| **Escopo** | Restrito (tools, permissions) | Aberto (qualquer contexto) |
| **Persistencia** | Vive durante a tarefa | Sempre disponivel |
| **Exemplo** | "Lance o test engineer" | "Como testar forms no Perform?" |

Um agent sem skills e um executor sem conhecimento de dominio.
Uma skill sem agent e conhecimento sem foco operacional.
A combinacao e o que produz resultado consistente.

---

## Resumo

| Artefato | Onde vive | Quem consome | Quando |
|----------|-----------|-------------|--------|
| `CLAUDE.md` | raiz do projeto | Claude Code | toda conversa (automatico) |
| `AGENTS.md` | raiz do projeto | Codex, humanos | referencia de agents |
| Agents | `.claude/agents/` | Claude Code (subprocessos) | lancados sob demanda |
| Skills | `.claude/skills/` | Claude Code (contextual) | sempre que relevante |
