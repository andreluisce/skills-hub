# Playbook

## Sources
- High Performance Browser Networking — Ilya Grigorik
- Intelligent Caching — Barker
- HTTP: The Definitive Guide — Gourley

## Objetivo
Latência é o fator limitante — reduzir round-trips tem mais impacto que reduzir tamanho de assets.

## Regras
- HTTP/2: multiplexing — bundling agressivo é menos necessário, chunks por rota são eficientes.
- Critical path: CSS no head, scripts com defer/async, preload de recursos críticos.
- next/image obrigatório para todas as imagens — size, format, priority explícitos.
- next/font com display swap e subset para fontes.
- dynamic() para componentes pesados não críticos.
- Bundle analyzer antes de qualquer release.

## Cache Policy por Tipo
- Assets com hash (JS/CSS/imagens): max-age=31536000, immutable.
- HTML de páginas: no-cache (valida, mas usa cache se não mudou).
- API responses: staleTime por domínio no TanStack Query.
- Invalide proativamente com revalidateTag() após mutações.

## Core Web Vitals Targets
| Metric | Good |
|---|---|
| LCP | < 2.5s |
| INP | < 100ms |
| CLS | < 0.1 |
