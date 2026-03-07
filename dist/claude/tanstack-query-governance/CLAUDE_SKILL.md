Skill: TanStack Query Governance
Description: Definir governança de estado de servidor com TanStack Query em React 19+, incluindo query keys, staleTime, invalidação, optimistic updates e políticas de erro/retry para apps Next.js 15+ em monorepo. Base operacional: # Playbook  ## Objetivo Tornar o estado de servidor previsível, auditável e eficiente.  ## Regras
Triggers: tanstack query, query keys, invalidation, optimistic update, server state
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Classificar domínios de dados por volatilidade e criticidade.
- 2. Padronizar convenção de query keys e ownership por pacote.
- 3. Definir staleTime, gcTime e regras de invalidação por evento.
- 4. Especificar optimistic updates, rollback e tratamento de erro.
- 5. Monitorar taxa de refetch, latência percebida e falhas.
Output Contract:
- Matriz de domínios de dados e política de cache.
- Convenção oficial de query keys.
- Regras de invalidação e update otimista.
- Indicadores de qualidade de server state.