Skill: TanStack Query Governance
Description: Define governance of estado of servidor with TanStack Query in React 19+, including query keys, staleTime, invalidation, optimistic updates and políticas of error/retry for apps Next.js 15+ in monorepo. Base operacional: # Playbook  ## Objective Make server status predictable, auditable and efficient.  ## Rules
Triggers: tanstack query, query keys, invalidation, optimistic update, server state
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Classify domains of data by volatility and criticality.
- 2. Standardize convention of query keys and ownership by package.
- 3. Define staleTime, gcTime and rules of invalidation by evento.
- 4. Especificar optimistic updates, rollback and tratamento of error.
- 5. Monitor refetch rate, perceived latency and failures.
Output Contract:
- Matrix of domains of data and policy of cache.
- Official convention of query keys.
- Rules of invalidation and optimistic update.
- Indicadores of qualidade of server state.