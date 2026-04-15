# Playbook

## Objective

Give any AI agent a persistent LLM Wiki backed by an Obsidian vault — a structured,
interlinked collection of markdown files that compounds knowledge over time. The LLM
incrementally builds and maintains the wiki; the human curates sources, directs analysis,
and asks the right questions.

**Obsidian is the IDE; the LLM is the programmer; the wiki is the codebase.**

## Trigger

Use when: asked to remember something, given a URL or document to ingest, asked a
knowledge question, or asked to maintain/lint the wiki.

---

## Architecture — three layers

### 1. Raw sources (`raw/`)
Your curated collection of source documents — articles, papers, transcripts, data files.
These are **immutable**: the LLM reads from them but never modifies them. This is your
source of truth.

### 2. The wiki (`wiki/`)
A directory of LLM-generated markdown files — concept pages, entity pages, source summaries,
overviews, comparisons. The LLM owns this layer entirely. It creates pages, updates them when
new sources arrive, maintains cross-references, and keeps everything consistent. You read it;
the LLM writes it.

### 3. The schema (`_schema.md`)
A document that tells the LLM how the wiki is structured, what the conventions are, and what
workflows to follow. This is the key configuration file — it makes the LLM a disciplined wiki
maintainer rather than a generic chatbot. You and the LLM co-evolve this over time.

---

## Vault location

**Vault path is resolved from the `OBSIDIAN_VAULT_DIR` env var.** Each project can set its
own vault path. There is no default — the consuming project or user must configure it.

```bash
VAULT="${OBSIDIAN_VAULT_DIR}"
```

**Initialize vault:**
```bash
# Wiki only
OBSIDIAN_VAULT_DIR=~/my-vault node vault-init.mjs

# Wiki + session
OBSIDIAN_VAULT_DIR=~/my-vault node vault-init.mjs --sessions my-research

# Or pass vault path as first arg
node vault-init.mjs ~/my-vault
node vault-init.mjs ~/my-vault --sessions my-research
```

---

## Vault structure

```
$OBSIDIAN_VAULT_DIR/
  _schema.md                          ← rules: purpose, conventions, active layers
  index.md                            ← content catalog (LLM reads this first)
  log.md                              ← append-only chronological operation log
  raw/                                ← immutable source documents
    YYYY-MM-DD-<slug>/
      source.md                       ← fetched content (frozen after creation)
      meta.yaml                       ← url, date, type, title, language
  wiki/                               ← LLM-owned knowledge layer
    concepts/
      <slug>.md                       ← concept pages (abstract knowledge)
    entities/
      <slug>.md                       ← entity pages (libs, tools, people, services)
    sources/
      <slug>.md                       ← source summary pages (one per ingested source)
    overviews/
      <slug>.md                       ← synthesis pages (cross-cutting themes, comparisons)
  sessions/                           ← OPTIONAL: session-scoped memory (if _schema.md enables it)
    <SESSION-ID>/
      README.md                       ← session overview, objective, status
      log/YYYY-MM-DD.md               ← daily session log with 🧠 Reasoning
      thinking/YYYY-MM-DD-topic.md    ← deep reasoning (5W2H, 5 Whys, ADR, Pre-mortem, RICE)
```

---

## Accessing the vault

### Primary: obsidian-mcp tools (Claude Code with MCP configured)
```
read-note <path>              → read a note
create-note <path> <content>  → create new note
edit-note <path> <content>    → update existing note
search-vault <query>          → full-text search across all notes
```

### Fallback: bash file operations (Copilot CLI, Codex, Gemini)
```bash
VAULT="${OBSIDIAN_VAULT_DIR}"
cat "$VAULT/index.md"
cat "$VAULT/wiki/concepts/cache-invalidation.md"
echo "content" >> "$VAULT/log.md"
```

---

## Indexing and logging

### `index.md` — content catalog
Content-oriented. Lists every page with a link, a one-line summary, and metadata. Organized
by category (concepts, entities, sources, overviews). The LLM updates it on every ingest.
When answering a query, the LLM reads the index first to find relevant pages, then drills in.

### `log.md` — chronological record
Append-only. Records what happened and when — ingests, queries, lint passes. Each entry
starts with `## [YYYY-MM-DD] <operation> | <title>` for grep parseability:
`grep "^## \[" log.md | tail -5` gives the last 5 entries.

---

## Operations

### /ingest \<url\> — resource ingestion

1. **Fetch and save raw source**: `raw/YYYY-MM-DD-<slug>/source.md` (immutable) + `meta.yaml`
2. **Create source summary page**: `wiki/sources/<slug>.md`
3. **Extract and integrate concepts**: check index.md for existing page → update or create
4. **Extract and integrate entities**: same create-or-update pattern
5. **Update index.md**: add new pages, update descriptions if enriched
6. **Append to log.md**: pages created/updated
7. **Discuss with user**: highlight key takeaways, ask what to emphasize

A single source may touch 10-15 wiki pages.

### /query — Q&A with wiki filing

1. Read `index.md` to find relevant pages
2. Read the relevant wiki pages + source summaries
3. Synthesize answer citing sources: `(Fonte: [[raw/YYYY-MM-DD-slug/source|Titulo]])`
4. **Offer to file the answer** as a new wiki page (overview, concept, comparison)
5. If filed: update `index.md` and `log.md`
6. If not found: say so explicitly, suggest sources to `/ingest`

### /consolidate — connection discovery

1. Read all wiki pages
2. Find semantic connections (shared concepts, related entities, complementary sources)
3. Merge duplicate pages (same topic, different slugs)
4. Strengthen backlinks in `## Conexoes`
5. Identify gaps: concepts mentioned but lacking their own page
6. Update `index.md` and `log.md`

### /lint — vault health check

1. Scan all files against `_schema.md` rules
2. Find orphan pages (zero inbound links)
3. Find broken links (`[[...]]` → non-existent file)
4. Find missing backlinks (A→B but not B→A)
5. Find citation gaps (empty `## Fontes`)
6. Find stale claims (newer sources contradict older pages)
7. Find potential duplicates (semantic overlap)
8. Generate report in `log.md`
9. Offer to auto-fix

---

## Wiki page templates

### Concept page (`wiki/concepts/<slug>.md`)

```markdown
# <Concept Name>

> #conceito

## Definicao
<clear, concise explanation>

## Contexto
<how this concept applies to the vault's domain>

## Exemplos
<concrete examples>

## Fontes
- [[raw/YYYY-MM-DD-slug/source|Title]] — <what this source contributed>

## Conexoes
- [[wiki/concepts/other]] — <relationship>
- [[wiki/entities/something]] — <relationship>
```

### Entity page (`wiki/entities/<slug>.md`)

```markdown
# <Entity Name>

> #entidade #<type: lib | tool | service | person>

## O que e
<short description>

## Uso no projeto
<how it's used, version, config>

## Conceitos relacionados
- [[wiki/concepts/concept]] — <relationship>

## Fontes
- [[raw/YYYY-MM-DD-slug/source|Title]]

## Conexoes
- [[wiki/entities/other]] — <relationship>
```

### Source summary page (`wiki/sources/<slug>.md`)

```markdown
# <Source Title>

> #fonte
> Tipo: article | video | paper | doc | repo
> Ingerido: YYYY-MM-DD
> Raw: [[raw/YYYY-MM-DD-slug/source]]

## Resumo
<3-5 sentences>

## Aprendizados chave
- <learning 1>
- <learning 2>

## Citacoes notaveis
> "<quote>" — <author>

## Conceitos extraidos
- [[wiki/concepts/slug]] — created | updated
- [[wiki/entities/slug]] — created | updated
```

### Overview page (`wiki/overviews/<slug>.md`)

```markdown
# <Overview Title>

> #sintese

## Tese
<central claim of this synthesis>

## Evidencias
- [[wiki/sources/slug]] — <what supports>
- [[wiki/sources/other]] — <what contradicts>

## Lacunas
<what's still missing to strengthen or refute the thesis>

## Fontes
- [[raw/YYYY-MM-DD-slug/source|Title]]

## Conexoes
- [[wiki/concepts/slug]] — <relationship>
```

---

## Use bidirectional links (`[[ ]]`)

This is Obsidian's greatest strength. Instead of rigid folder hierarchies, use `[[wiki-links]]`
between notes. Over time, the Graph View shows how concepts connect across sources.

---

## Session layer (optional)

When `_schema.md` has the sessions layer enabled, the skill provides session-scoped memory
alongside the wiki. Sessions track work-in-progress; the wiki captures reusable knowledge.

### Vault structure with sessions

```
$OBSIDIAN_VAULT_DIR/
  ...                                 ← (wiki structure as above)
  sessions/                           ← session-scoped memory
    <SESSION-ID>/
      README.md                       ← session overview, objective, status
      log/
        YYYY-MM-DD.md                 ← daily session log with 🧠 Reasoning
      thinking/
        README.md                     ← framework templates
        YYYY-MM-DD-topic.md           ← deep reasoning (5W2H, 5 Whys, ADR, etc.)
```

Session IDs are flexible — a JIRA ticket (DLV-485), a branch name, a research topic, whatever
scopes the work.

### Session workflow

**Start**: read `index.md` + `log.md` + `sessions/<ID>/README.md` + today's session log.
Give a one-paragraph summary of loaded context.

**During work**: log reasoning inline (### 🧠 Reasoning) in the daily log. Promote complex
reasoning to `thinking/` files with the correct framework.

**End**: summarize what was done, note open threads, update session README. Promote
reusable knowledge to wiki pages (see Knowledge Promotion below).

### Session log format

```markdown
# Session — <ID> — YYYY-MM-DD

## Task
<what is being worked on today>

## 🧠 Reasoning
- **Problem:** <what needed to be solved>
- **Solution:** <why this approach and not another>
- **Considered:**
  - <Option A> → rejected: <why>
  - <Option B> → chosen: <why>
- **Assumptions:** <what was assumed true>
- **Risks:** <known unknowns or tradeoffs>
- **"Aha!" moment:** <what I didn't know before that now makes sense>

## What was done
<summary of changes and outcomes>

## Open threads
<unresolved questions for next session>

## Next steps
<what to work on next session>
```

---

## Reasoning frameworks

Use structured frameworks when reasoning is complex. The session's `thinking/README.md`
contains templates for all frameworks.

| Situation | Framework | File |
|-----------|-----------|------|
| Starting a new task | **5W2H** | `thinking/YYYY-MM-DD-5w2h-topic.md` |
| Investigating a failure | **5 Whys** | `thinking/YYYY-MM-DD-5whys-topic.md` |
| Architecture/tech/pattern choice | **ADR** | `thinking/YYYY-MM-DD-adr-topic.md` |
| Risky or complex implementation | **Pre-mortem** | `thinking/YYYY-MM-DD-premortem-topic.md` |
| Choosing between competing approaches | **RICE** | `thinking/YYYY-MM-DD-rice-topic.md` |
| Quick tradeoff (2 options) | **Inline 🧠** | session log only |

**When to promote from inline to a thinking file:**
- Reasoning involves 3+ options
- Decision is architectural or affects multiple areas
- Future sessions will reference it
- The chain is longer than ~10 lines

---

## Knowledge promotion — session → wiki

The bridge between work-in-progress and persistent knowledge. When something discovered
during a session is valuable beyond the current scope, promote it to a wiki page:

| Session discovery | Promote to |
|---|---|
| Architectural decision (ADR) | `wiki/concepts/<decision-slug>.md` |
| Bug/gotcha/edge case | `wiki/concepts/<gotcha-slug>.md` |
| Reusable pattern | `wiki/concepts/<pattern-slug>.md` |
| Library/tool insight | `wiki/entities/<slug>.md` (update) |
| External resource | `/ingest` → wiki pages |

After promoting, update `index.md` and `log.md`.

**The golden rule: "Translate to human"** — don't just store raw output. For every important
discovery, write a summary answering: What was the problem? Why this solution? What was
the "Aha!" moment?

---

## Extending this skill

This skill provides the complete LLM Wiki pattern including optional sessions and reasoning.
Projects can extend it by:

- Setting a project-specific `$OBSIDIAN_VAULT_DIR` and `_schema.md` purpose
- Adding domain-specific session ID conventions (JIRA tickets, research topics, etc.)
- Adding domain-specific page types or wiki categories
- Wrapping in a project-named skill (e.g., `perform-memory`) that configures defaults

The extending skill should reference this playbook and add only project-specific behavior.

---

## Anti-patterns

- **Modifying raw sources**: files in `raw/` are immutable after creation.
- **Duplicate wiki pages**: check `index.md` before creating; use `/consolidate` to merge.
- **Wiki pages without sources**: every page must cite at least one source in `## Fontes`.
- **Answering from memory instead of wiki**: always check the wiki first, cite sources.
- **Skipping wiki during ingest**: ingesting without creating wiki pages defeats the purpose.
- **Letting answers disappear**: file good Q&A syntheses back into the wiki.
- **No knowledge promotion**: discovering valuable patterns during sessions but not promoting them to wiki pages. Session knowledge dies with the session; wiki knowledge compounds.
- **No open threads**: ending a session without noting unresolved questions. Future sessions lose continuity.
- **Wrong framework**: using free-form reasoning when a structured framework applies.
- **Hardcoded vault paths**: always resolve from `$OBSIDIAN_VAULT_DIR`.
