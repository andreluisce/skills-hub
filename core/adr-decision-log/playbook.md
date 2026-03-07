# Playbook

## Objective
Create durable, searchable records of significant architectural decisions with full context and tradeoffs.

## Rules of When to Write an ADR
- Any decision that affects system structure, data model, or cross-team interfaces.
- Any decision that would be hard or expensive to reverse.
- Any decision where reasonable engineers would disagree on the right answer.
- Do NOT write ADRs for implementation details — only architectural choices.

## Rules of ADR Format
- Status: Proposed | Accepted | Deprecated | Superseded by ADR-NNN.
- Context: the forces, constraints, and requirements driving this decision.
- Decision: one clear statement of what was decided.
- Consequences: positive outcomes expected + negative tradeoffs accepted.

## Rules of Quality
- An ADR without tradeoffs is incomplete — every decision has a cost.
- Options considered must include the option that was NOT chosen and why.
- Write for an engineer joining the team 2 years from now — assume no context.

## Rules of Storage
- Store in `docs/decisions/ADR-NNN-short-title.md` — sequential numbering.
- Link from relevant code with a comment: `// See ADR-042 for rationale`.
- Never delete an ADR — deprecate or supersede it instead.

## Rules of Maintenance
- Review ADRs when the system they describe changes significantly.
- Supersede outdated ADRs — create a new one and link backwards.
- Include ADR review in architecture change pull request template.
