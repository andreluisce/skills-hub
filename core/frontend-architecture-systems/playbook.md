# Playbook

## Sources
- Frontend Architecture for Design Systems — Micah Godbolt
- Professional Frontend Architecture — Nolasco
- Frontend Unicorn — Malewicz

## Objective
Build scalable UI that teams can evolve without regression and without duplication.

## Rules
- Semantic token before primitive value — never hardcoded color in component.
- New component enters the library after 3+ real uses.
- Breaking change in component = major version + migration guide.
- Todos os estados definidos: default, loading, errorr, empty, disabled.
- Accessibility is not optional: keyboard, contrast, labels, visible focus.

## Token Hierarchy
Primitive → Semantic → Component
#1E40AF  → color-primary → button-background

## Performance Budget
- FCP < 1.5s in 4G.
- LCP < 2.5s.
- Bundle JS inicial < 150KB gzipped.
