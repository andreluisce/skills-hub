Skill: Web Performance & Browser Networking
Description: Aplicar principios of performance web of Ilya Grigorik and caching inteligente. Use for otimizar tempo of carregamento, networking, cache and experiencia em conexoes lentas. Base operacional: # Playbook  ## Sources - High Performance Browser Networking — Ilya Grigorik - Intelligent Caching — Barker - HTTP: The Definitive Guide — Gourley
Triggers: web performance, http, caching, browser networking, latency, core web vitals, cdn, compression, http2, resource hints
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Medir Core Web Vitals in producao and identificar regressoes by rota.
- 2. Auditar critical rendering path and eliminar resources bloqueantes.
- 3. Define politica of cache by tipo of asset (imutavel, revalidavel, without cache).
- 4. Otimizar assets (imagens, fontes, JS) with budget by jornada.
- 5. Analisar bundle with bundle-analyzer and eliminar dependencies pesadas desnecessarias.
Output Contract:
- Relatorio of Core Web Vitals by rota.
- Matriz of politica of cache by tipo of asset.
- Plano of reducao of bundle with impacto estimado.
- Checklist of optimization of critical path.