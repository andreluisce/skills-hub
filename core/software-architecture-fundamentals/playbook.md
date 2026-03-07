# Playbook

## Source
Fundamentals of Software Architecture — Mark Richards & Neal Ford

## Objective
Make defensible architectural decisions with explicit trade-offs and continuous quality assurance.

## Architectural Laws
- Everything is a trade-off. If you haven't found the trade-off, you haven't looked yet.
- “Why” is more important than “how”.

## Quality Attributes — Priorize 3-7
Availability, Scalability, Maintainability, Testability, Performance, Security, Deployability.

## Modularity
- High cohesion: elements within a module belong together.
- Loose coupling: change in one module does not require change in another.
- Test: "How many modules change if I change the bank?" — if more than one, there is a problem.

## ADR Template
1. Title: decision in one sentence.
2. Status: proposta / aceita / deprecada.
3. Context: why this decision was necessary.
4. Decision: what was decided.
5. Consequences: trade-offs, what becomes easier, what becomes more difficult.

## Fitness Functions
- Typecheck + lint no CI.
- Bundle size budget by PR.
- Minimum coverage of tests such as gate.
- Imports proibidos entre layers verificados automaticamente.
