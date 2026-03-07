# Playbook

## Sources
- Advanced React — Nadia Makarevich
- React Anti-Patterns — Juntao Qiu
- Fluent React — Tejas Kumar

## Objective
Master React's rendering model to write efficient, predictable and anti-pattern-free components.

## Rules
- Re-render of pai re-renderiza todos the filhos by standard — empurre state for baixo.
- React.memo, useMemo and useCallback apenas with profiling confirmando custo real.
- Nunca defina components dentro of components.
- Never use index the a key in dynamic lists.
- useEffect not is for fetch of data — use TanStack Query or Server Components.
- Separate Contexts by domain of change to avoid cascading re-renders.
- Stale closure: include all dependencies in the array of useEffect/useCallback.

## Composition Patterns
- Compound Components: estado compartilhado via Context interno.
- Children the render prop: flexibility of rendering without coupling.
- HOC: apenas for cross-cutting concerns (ErrorBoundary, auth guard).
