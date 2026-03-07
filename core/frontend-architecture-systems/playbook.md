# Playbook

## Sources
- Frontend Architecture for Design Systems — Micah Godbolt
- Professional Frontend Architecture — Nolasco
- Frontend Unicorn — Malewicz

## Objetivo
Construir UI escalável que times conseguem evoluir sem regressão e sem duplicação.

## Regras
- Token semântico antes de valor primitivo — nunca cor hardcoded em componente.
- Componente novo entra na biblioteca após 3+ usos reais.
- Breaking change em componente = versão maior + migration guide.
- Todos os estados definidos: default, loading, error, empty, disabled.
- Acessibilidade não é opcional: teclado, contraste, labels, foco visível.

## Token Hierarchy
Primitive → Semantic → Component
#1E40AF  → color-primary → button-background

## Performance Budget
- FCP < 1.5s em 4G.
- LCP < 2.5s.
- Bundle JS inicial < 150KB gzipped.
