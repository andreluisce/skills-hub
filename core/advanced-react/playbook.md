# Playbook

## Sources
- Advanced React — Nadia Makarevich
- React Anti-Patterns — Juntao Qiu
- Fluent React — Tejas Kumar

## Objetivo
Dominar o modelo de rendering do React para escrever componentes eficientes, previsíveis e livres de anti-patterns.

## Regras
- Re-render do pai re-renderiza todos os filhos por padrão — empurre state para baixo.
- React.memo, useMemo e useCallback apenas com profiling confirmando custo real.
- Nunca defina componentes dentro de componentes.
- Nunca use index como key em listas dinâmicas.
- useEffect não é para fetch de dados — use TanStack Query ou Server Components.
- Separe Contexts por domínio de mudança para evitar re-renders em cascata.
- Stale closure: inclua todas as dependências no array de useEffect/useCallback.

## Composition Patterns
- Compound Components: estado compartilhado via Context interno.
- Children as render prop: flexibilidade de renderização sem acoplamento.
- HOC: apenas para cross-cutting concerns (ErrorBoundary, auth guard).
