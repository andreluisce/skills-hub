---
name: next15-app-router-architecture
description: Define and refatorar architecture in Next.js 15+ App Router with Server Components-first, boundaries Client, streaming and cache orientado a domínio for apps React 19+ in monorepo. Base operacional: # Playbook  ## Objective Design App Router with minimal client JS and maximum operational predictability.  ## Rules Use quando o pedido envolver: nextjs 15, app router, server components, streaming, route architecture.
---

# Next.js 15 App Router Architecture

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Map routes, dynamic segments and page rendering requirements.
2. Define Server vs Client boundaries by responsibility and cost of hydration.
3. Design strategy of cache and revalidation by domain of data.
4. Estruturar loaders, actions and errorr boundaries by segmento.
5. Validate performance with Web Vitals and render profile in real browsing.

## Saída esperada
1. Mapa of rotas and boundaries Server/Client.
2. Caching/revalidation decisions by domain.
3. Implementation plan by segment.
4. Checklist of performance and regression.
