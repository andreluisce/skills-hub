---
name: next15-app-router-architecture
description: Definir e refatorar arquitetura em Next.js 15+ App Router com Server Components-first, boundaries Client, streaming e cache orientado a domínio para apps React 19+ em monorepo. Base operacional: # Playbook  ## Objetivo Projetar App Router com mínimo JS de cliente e máxima previsibilidade operacional.  ## Regras Use quando o pedido envolver: nextjs 15, app router, server components, streaming, route architecture.
---

# Next.js 15 App Router Architecture

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Mapear rotas, segmentos dinâmicos e requisitos de renderização por página.
2. Definir fronteiras Server vs Client por responsabilidade e custo de hidratação.
3. Projetar estratégia de cache e revalidação por domínio de dados.
4. Estruturar loaders, actions e error boundaries por segmento.
5. Validar performance com Web Vitals e perfil de render em navegação real.

## Saída esperada
1. Mapa de rotas e boundaries Server/Client.
2. Decisões de cache/revalidação por domínio.
3. Plano de implementação por segmento.
4. Checklist de performance e regressão.
