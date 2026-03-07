# Playbook

## Source
Fast and Slow — Daniel Kahneman

## Objective
Make technical and product decisions with active System 2, avoiding biases that degrade quality.

## Sistema 1 vs Sistema 2
- System 1: automatic, fast, heuristic — operates by association.
- System 2: deliberate, slow, logical — requires conscious effort.
- Architectural decisions and critical code reviews require System 2.

## Biases to Watch
- Anchoring: do not estimate with external anchors — start from scratch.
- Confirmation Bias: actively seek evidence against the favored hypothesis.
- Planning Fallacy: use external reference for estimates. Add explicit buffering.
- Sunk Cost: only evaluate future cost/benefit — ignore the past in the decision.
- Halo Effect: evaluate the idea, not the source. PRs reviewed without knowing the author when possible.

## Aplicado a UX
- Users operate in System 1 — design should be obvious without effort.
- Reserve System 2 for important decisions (irreversible actions).
- Atrito positivo onde Sistema 2 DEVE ser acionado.

## Pre-Mortem
"Imagine it's 6 months later and this decision was a disaster. What went wrong?"
List the reasons. Assess whether they are mitigable.
