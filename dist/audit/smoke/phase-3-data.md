# Auditoria — Fase 3: Dados & Infraestrutura
Projeto: ~/workspaces/personal/cog-ministry-docs

## Objetivo
Avaliar gestão de estado de servidor, query keys, cache, invalidação, schema Supabase e RLS.

## Skills ativas nesta fase

### tanstack-query-governance
<skill>
---
name: tanstack-query-governance
description: Define governance of estado of servidor with TanStack Query in React 19+, including query keys, staleTime, invalidation, optimistic updates and políticas of error/retry for apps Next.js 15+ in monorepo.
---
# TanStack Query Governance

## Stack
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Classify domains of data by volatility and criticality.
2. Standardize convention of query keys and ownership by package.
3. Define staleTime, gcTime and rules of invalidation by evento.
4. Especificar optimistic updates, rollback and tratamento of error.
5. Monitor refetch rate, perceived latency and failures.

## Output esperado
1. Matrix of domains of data and policy of cache.
2. Official convention of query keys.
3. Rules of invalidation and optimistic update.
4. Indicadores of qualidade of server state.

# Playbook

## Objective
Make server status predictable, auditable and efficient.

## Rules
- Every query key must be deterministic and documented.
- Invalidation based on business events, not on convenience.
- Retry e backoff diferentes by tipo of error.
- Estado of UI not deve vazar for cache of servidor.
</skill>

### supabase-expert
<skill>
# Supabase Ministerial Expert

## Table Schema: `submissions`
| Column | Type | Description |
|---|---|---|
| id | uuid | Primary Key |
| applicant_id | uuid | FK to auth.users |
| form_data | jsonb | Full form content (Marriage/Divorce history) |
| signature_url | text | Path in Supabase Storage |
| status | text | pending, approved, rejected |
| locale | text | pt or en |

## RLS Policies
- **Applicants**: Can only insert their own submissions and read their own status.
- **Admins**: Full read access to all submissions; can update status.

## Storage
- `signatures/`: Private bucket for signature PNGs.
- `generated_pdfs/`: Secure storage for generated PDF documents.
</skill>

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
   ```
   pnpm lint
   pnpm build
   ```
   Se quebrar, ajuste até passar.
5. **REPORT** — Gere saída estruturada ao final:
   - **summary**: o que mudou e por quê
   - **files_changed**: lista de arquivos alterados
   - **risks**: pendências e próximos passos

## Regras
- NÃO altere lógica de negócio sem justificativa explícita.
- Se uma correção tem risco alto, apenas reporte sem aplicar.
- Mantenha commits pequenos e atômicos se o projeto estiver sob git.
