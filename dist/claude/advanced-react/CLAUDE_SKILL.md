Skill: Advanced React
Description: Aplicar tecnicas avancadas of React of Nadia Makarevich e React Anti-Patterns of Juntao Qiu. Use for otimizar renders, entender reconciliation, corrigir anti-patterns e dominar composicao avancada. Base operacional: # Playbook  ## Sources - Advanced React — Nadia Makarevich - React Anti-Patterns — Juntao Qiu - Fluent React — Tejas Kumar
Triggers: advanced react, reconciliation, render optimization, memo, context performance, react anti-patterns, composition advanced, react internals
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Auditar triggers of re-render e identificar renders desnecessarios.
- 2. Aplicar React.memo, useMemo e useCallback apenas onde profiling confirmar necessidade.
- 3. Eliminar anti-patterns (prop drilling, context leak, stale closure, index as key).
- 4. Refatorar with composition patterns (compound components, render props).
- 5. Migrar fetch of data of useEffect for Server Components ou TanStack Query.
Output Contract:
- Diagnostico of renders desnecessarios by component.
- Lista of anti-patterns eliminados.
- Plano of refatoracao with composition patterns.
- Checklist of performance of renderizacao.