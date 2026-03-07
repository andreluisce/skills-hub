# Playbook

## Objective
Manage state, forms, and rendering in a predictable and efficient way.

## Rules of Estado
- Local: useState/useReducer for estado of component isolado.
- Global of UI: Zustand for estados compartilhados entre features.
- Servidor: TanStack Query exclusivamente — nunca misturar with estado of UI.

## Rules of Forms
- React Hook Form + Zod in all forms.
- Inline validation, not just on submit.
- Submit disabled until required date is correct.
- Specific error by field — never a generic message.

## Rules of Custom Hooks
- A hook by responsibility of domain.
- Prefix use mandatory, return typed explicitly.
- Business logic outside of components.

## Rules of Performance
- memo/useMemo/useCallback only with evidence of actual cost.
- Listas longas: TanStack Virtual.
- Animations: Framer Motion for state transitions, Tailwind for simple hover/focus.
