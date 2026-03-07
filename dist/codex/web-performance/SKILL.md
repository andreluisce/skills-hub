---
name: web-performance
description: Aplicar principios of performance web of Ilya Grigorik and caching inteligente. Use for otimizar tempo of carregamento, networking, cache and experiencia em conexoes lentas. Base operacional: # Playbook  ## Sources - High Performance Browser Networking — Ilya Grigorik - Intelligent Caching — Barker - HTTP: The Definitive Guide — Gourley Use quando o pedido envolver: web performance, http, caching, browser networking, latency, core web vitals, cdn, compression, http2, resource hints.
---

# Web Performance & Browser Networking

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Medir Core Web Vitals in producao and identificar regressoes by rota.
2. Auditar critical rendering path and eliminar resources bloqueantes.
3. Define politica of cache by tipo of asset (imutavel, revalidavel, without cache).
4. Otimizar assets (imagens, fontes, JS) with budget by jornada.
5. Analisar bundle with bundle-analyzer and eliminar dependencies pesadas desnecessarias.

## Saída esperada
1. Relatorio of Core Web Vitals by rota.
2. Matriz of politica of cache by tipo of asset.
3. Plano of reducao of bundle with impacto estimado.
4. Checklist of optimization of critical path.
