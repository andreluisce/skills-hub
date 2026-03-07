# Playbook

## Source
A Philosophy of Software Design — John Ousterhout

## Objective
Reduzir complexidade sistematicamente for que qualquer desenvolvedor possa modificar o sistema with confidence.

## Rules
- Strategic programming: invista 10-15% of tempo in qualidade of design.
- Deep modules: simple interface, rich implementation — maximum functionality per unit of interface.
- Evite pass-through methods — wrapper without value is a shallow module.
- Information hiding: hide design decisions that can change.
- Obvious code: new developer understands without asking.
- Inconsistency is poison — if you of it one way in one place, of it the same way everywhere.
- Comments explain the "why", not the "what".

## Complexidade — Sintomas
- Change amplification: a simple change requires change in many places.
- Cognitive load: you need to know a lot to make a simple change.
- Unknown unknowns: It is not obvious which parts need to change.
