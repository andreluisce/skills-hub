# Playbook

## Sources
- Codigo Limpo (Clean Code) — Robert C. Martin
- Clean Architecture — Robert C. Martin
- Desenvolvimento Agil Limpo — Robert C. Martin

## Objective
Write code that any developer understands, modifies and tests without surprises.

## Rules of Clean Code
- Names reveal intent — if you need comment, rename.
- Functions do one thing. Ideal size: 5-15 lines.
- 0-2 arguments per function. 3+ requires justification.
- No hidden side effects. No boolean flags as a parameter.
- Don't return null — throw exception or use null object.
- Commented code is prohibited — delete or commit.

## Rules of Clean Architecture
- Dependency Rule: dependencies only point to within (Entities ← Use Cases ← Adapters ← Frameworks).
- Entities not conhecem Use Cases. Use Cases not conhecem UI.
- Database is detail — rule of business doesn't know which bank exists.
- Cruzamentos of boundary: apenas DTOs simples.

## SOLID
- S: a reason for changing by module.
- O: open for extension, closed for modification.
- L: subtipos substituem o tipo base without surpresas.
- I: client-specific interfaces.
- D: depend on abstractions, not concretions.
