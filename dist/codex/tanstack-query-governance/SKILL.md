---
name: tanstack-query-governance
description: Definir governança de estado de servidor com TanStack Query em React 19+, incluindo query keys, staleTime, invalidação, optimistic updates e políticas de erro/retry para apps Next.js 15+ em monorepo. Base operacional: # Playbook  ## Objetivo Tornar o estado de servidor previsível, auditável e eficiente.  ## Regras Use quando o pedido envolver: tanstack query, query keys, invalidation, optimistic update, server state.
---

# TanStack Query Governance

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Classificar domínios de dados por volatilidade e criticidade.
2. Padronizar convenção de query keys e ownership por pacote.
3. Definir staleTime, gcTime e regras de invalidação por evento.
4. Especificar optimistic updates, rollback e tratamento de erro.
5. Monitorar taxa de refetch, latência percebida e falhas.

## Saída esperada
1. Matriz de domínios de dados e política de cache.
2. Convenção oficial de query keys.
3. Regras de invalidação e update otimista.
4. Indicadores de qualidade de server state.
