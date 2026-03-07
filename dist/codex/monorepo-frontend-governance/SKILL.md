---
name: monorepo-frontend-governance
description: Estruturar governança técnica de monorepo frontend com apps Next.js 15+, pacotes compartilhados React 19+, boundaries de dependência, ownership, versionamento e fluxo de entrega sustentável. Base operacional: # Playbook  ## Objetivo Garantir escala de time e código sem erosão arquitetural.  ## Regras Use quando o pedido envolver: monorepo, package boundaries, frontend governance, workspace architecture, ownership.
---

# Monorepo Frontend Governance

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Definir topologia do monorepo e responsabilidades por pacote/app.
2. Estabelecer regras de dependência e imports permitidos.
3. Formalizar ownership, revisão e política de mudanças.
4. Padronizar pipelines de build, test e release por escopo.
5. Monitorar lead time, falhas de integração e custo de manutenção.

## Saída esperada
1. Mapa de apps/pacotes e ownership.
2. Matriz de dependências permitidas.
3. Regras de pipeline e release.
4. Métricas de saúde do monorepo.
