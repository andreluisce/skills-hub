---
name: ui-ux-operations
description: Skill for design of flows of user experience. Use to optimize upload, validation and long operations processes, with real-time feedback, actionable errors and intuitive dashboards. Base operacional: # Playbook  ## Objective Eliminate friction in operational flows and ensure the system never feels frozen.  ## Rules Use quando o pedido envolver: ux flow, upload flow, progress bar, toast notifications, friendly errorrs, dashboard ux, form ux.
---

# UI/UX Operations

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Mapear flow critico e identificar pontos of friccao e espera.
2. Implement immediate loading states after any user action.
3. Substituir errors genericos by mensagens with campo, causa e acao corretiva.
4. Adicionar progress indicators for operactions acima of 1 segundo.
5. Validate flow in scenario of error, slowness and empty state.

## Saída esperada
1. Mapa of flow with pontos of friccao identificados.
2. Padrao of loading/errorr/empty by operacao.
3. Mensagens of error acionaveis by caso.
4. Checklist of estados do flow cobertos.
