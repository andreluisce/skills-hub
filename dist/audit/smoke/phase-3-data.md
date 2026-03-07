# Auditoria — Fase 3: Dados & Infraestrutura
Projeto: ~/workspaces/personal/cog-ministry-docs

## Objetivo
Avaliar gestão de estado de servidor, query keys, cache, invalidação, schema Supabase e RLS.

## Skills ativas nesta fase

### tanstack-query-governance
<skill>
---
name: tanstack-query-governance
description: Definir governança de estado de servidor com TanStack Query em React 19+, incluindo query keys, staleTime, invalidação, optimistic updates e políticas de erro/retry para apps Next.js 15+ em monorepo.
---
# TanStack Query Governance

## Stack
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Classificar domínios de dados por volatilidade e criticidade.
2. Padronizar convenção de query keys e ownership por pacote.
3. Definir staleTime, gcTime e regras de invalidação por evento.
4. Especificar optimistic updates, rollback e tratamento de erro.
5. Monitorar taxa de refetch, latência percebida e falhas.

## Output esperado
1. Matriz de domínios de dados e política de cache.
2. Convenção oficial de query keys.
3. Regras de invalidação e update otimista.
4. Indicadores de qualidade de server state.

# Playbook

## Objetivo
Tornar o estado de servidor previsível, auditável e eficiente.

## Regras
- Toda query key deve ser determinística e documentada.
- Invalidação baseada em eventos de negócio, não em conveniência.
- Retry e backoff diferentes por tipo de erro.
- Estado de UI não deve vazar para cache de servidor.
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
