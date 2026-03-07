---
name: designing-data-intensive-apps
description: Apply principles of data systems by Martin Kleppmann. Use for decisions of modeling of data, consistency, caching, indexing, queuing and reliability in applications that rely heavily on data. Base operacional: # Playbook  ## Source Designing Data-Intensive Applications — Martin Kleppmann  ## Objective Use quando o pedido envolver: data modeling, consistency, caching, indexing, reliability, scalability, database design, kleppmann, ddia, eventual consistency.
---

# Designing Data-Intensive Applications

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Mapear padroes of acesso a data by entidade e frequencia.
2. Define indices by column of filter and most frequent join.
3. Estabelecer politica of cache by volatilidade of dado.
4. Garantir atomicidade in operactions compostas via transacao.
5. Monitorar latencia P95/P99 e diagnosticar queries lentas with EXPLAIN.

## Saída esperada
1. Mapa of acesso a data by entidade.
2. Lista of indices criados e justificativa.
3. Politica of cache by dominio of dado.
4. Plano of confiabilidade e tratamento of falha.
