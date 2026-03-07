Skill: Monorepo Management
Description: Skill of orquestracao do monorepo. Use for gerenciar a relacao entre apps e pacotes como api-client, ui e monitoring via turbo/pnpm. Base operacional: # Playbook  ## Objective Ensure that the monorepo scales without erosion of boundaries and without duplication of logic.  ## Rules
Triggers: monorepo management, turbo, pnpm workspace, package structure, api-client, monorepo orchestration
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Mapear topologia of apps e pacotes with responsabilidades claras.
- 2. Verificar que imports entre pacotes respeitam a API publica (index.ts).
- 3. Confirmar que logica of data esta in api-client, not in apps.
- 4. Padronizar pipelines of build, test e lint by escopo via turbo.
- 5. Monitorar tamanho of pacotes e dependencias circulares.
Output Contract:
- Mapa of pacotes/apps with ownership.
- Documented dependency rules.
- Pipeline turbo by escopo.
- Relatorio of health do monorepo.