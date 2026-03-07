---
name: monorepo-mgmt
description: Skill of orquestracao do monorepo. Use for gerenciar a relacao entre apps e pacotes como api-client, ui e monitoring via turbo/pnpm. Base operacional: # Playbook  ## Objective Ensure that the monorepo scales without erosion of boundaries and without duplication of logic.  ## Rules Use quando o pedido envolver: monorepo management, turbo, pnpm workspace, package structure, api-client, monorepo orchestration.
---

# Monorepo Management

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Mapear topologia of apps e pacotes with responsabilidades claras.
2. Verificar que imports entre pacotes respeitam a API publica (index.ts).
3. Confirmar que logica of data esta in api-client, not in apps.
4. Padronizar pipelines of build, test e lint by escopo via turbo.
5. Monitorar tamanho of pacotes e dependencias circulares.

## Saída esperada
1. Mapa of pacotes/apps with ownership.
2. Documented dependency rules.
3. Pipeline turbo by escopo.
4. Relatorio of health do monorepo.
