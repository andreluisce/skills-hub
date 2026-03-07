Skill: Designing Data-Intensive Applications
Description: Apply principles of data systems by Martin Kleppmann. Use for decisions of modeling of data, consistency, caching, indexing, queuing and reliability in applications that rely heavily on data. Base operacional: # Playbook  ## Source Designing Data-Intensive Applications — Martin Kleppmann  ## Objective
Triggers: data modeling, consistency, caching, indexing, reliability, scalability, database design, kleppmann, ddia, eventual consistency
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Mapear padroes of acesso a data by entidade e frequencia.
- 2. Define indices by column of filter and most frequent join.
- 3. Estabelecer politica of cache by volatilidade of dado.
- 4. Garantir atomicidade in operactions compostas via transacao.
- 5. Monitorar latencia P95/P99 e diagnosticar queries lentas with EXPLAIN.
Output Contract:
- Mapa of acesso a data by entidade.
- Lista of indices criados e justificativa.
- Politica of cache by dominio of dado.
- Plano of confiabilidade e tratamento of falha.