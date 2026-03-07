Skill: React Frontend Architecture 2026
Description: Arquitetar e refatorar frontend com Next.js 15+, React 19+, TanStack Query, shadcn/ui e monorepo, com foco em fronteiras de domínio, contratos entre pacotes e qualidade evolutiva. Base operacional: # Playbook  ## Stack padrão - Next.js 15+ App Router com Server Components por padrão. - React 19+ para UI e boundaries Client quando necessário. - TanStack Query para estado de servidor e invalidação explícita.
Triggers: arquitetura frontend, nextjs 15, react 19, tanstack query, shadcn, monorepo
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Classificar contexto de produto, risco e limites de domínio.
- 2. Definir blueprint com boundaries e contratos por pacote.
- 3. Escolher estratégia RSC/Client e cache de dados no TanStack Query.
- 4. Implementar com SOLID, KISS, DRY e regras de governança no monorepo.
- 5. Validar com auditoria técnica, métricas e plano incremental.
Output Contract:
- Diagnóstico objetivo do estado atual.
- Arquitetura alvo por módulos e pacotes.
- Plano de migração em etapas pequenas.
- Critérios de qualidade e observabilidade.
- Tradeoffs e riscos aceitos.