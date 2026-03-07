# Playbook

## Objective
Eliminate friction in operational flows and ensure the system never feels frozen.

## Rules
- Immediate loading state after any user action.
- Progress indicator for operactions acima of 1 segundo.
- Errors identify the exact field, explain the problem, and suggest corrective action.
- Empty state has clear instruction on what to do next.
- Frequent actions accessible with 1 click from the dashboard.
- Inline validation in forms — not just in submit.
- Preserve context between steps — without loss of data in navigation.

## Feedback Patterns
- Toast: confirmation of success and recoverable errors.
- Inline errorr: invalid form fields.
- Progress bar: uploads e operactions longas.
- Skeleton: carregamento of listas e cards.
- Spinner: specific actions (submit, delete button).
