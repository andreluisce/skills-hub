# Playbook

## Sources
- High Performance Browser Networking — Ilya Grigorik
- Intelligent Caching — Barker
- HTTP: The Definitive Guide — Gourley

## Objective
Latency is the limiting factor — reducing round-trips has more impact than reducing size of assets.

## Rules
- HTTP/2: multiplexing — aggressive bundling is less necessary, chunks by route are efficient.
- Critical path: CSS in head, scripts with defer/async, preload critical resources.
- next/image mandatory for all images — explicit size, format, priority.
- next/font with display swap and subset for fontes.
- Use dynamic() for heavy non-critical components.
- Bundle analyzer antes of qualquer release.

## Cache Policy by Tipo
- Assets with hash (JS/CSS/imagens): max-age=31536000, immutable.
- HTML of pages: no-cache (valid, but use cache not mudou).
- API responses: staleTime by domain in TanStack Query.
- Invalide proativamente with revalidateTag() after mutations.

## Core Web Vitals Targets
| Metric | Good |
|---|---|
| LCP | < 2.5s |
| INP | < 100ms |
| CLS | < 0.1 |
