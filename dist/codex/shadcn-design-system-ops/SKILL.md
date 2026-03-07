---
name: shadcn-design-system-ops
description: Operar e evoluir design system com shadcn/ui e Tailwind v4, padronizando tokens, variantes, acessibilidade e governança de componentes para múltiplos apps em monorepo Next.js 15+ e React 19+. Base operacional: # Playbook  ## Objetivo Escalar UI consistente entre apps sem travar evolução de produto.  ## Regras Use quando o pedido envolver: shadcn, design system, tailwind v4, cva, accessibility.
---

# shadcn Design System Operations

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Definir tokens semânticos globais e variações por tema/contexto.
2. Estabelecer padrões de componentes base e variantes com cva.
3. Criar política de contribuição e revisão para novos componentes.
4. Validar acessibilidade, foco visível e contraste em fluxos críticos.
5. Publicar changelog de DS e plano de adoção por app.

## Saída esperada
1. Catálogo de tokens e variantes aprovadas.
2. Guia de contribuição de componentes.
3. Checklist de acessibilidade operacional.
4. Estratégia de rollout do design system.
