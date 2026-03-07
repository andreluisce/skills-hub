---
name: adr-decision-log
description: Create and maintain Architecture Decision Records (ADRs) for significant technical decisions. Use to document context, options considered, decision rationale, tradeoffs, and consequences in a durable, searchable format. Base operacional: # Playbook  ## Objective Create durable, searchable records of significant architectural decisions with full context and tradeoffs.  ## Rules of When to Write an ADR Use quando o pedido envolver: adr, architecture decision, decision record, technical decision, tradeoffs, design decision, decision log.
---

# Architecture Decision Records

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Identify the decision — what problem is being solved, what is the trigger.
2. Document context — constraints, requirements, and forces driving the decision.
3. List options considered with pros and cons per option.
4. Record the decision with explicit rationale and tradeoffs accepted.
5. Document consequences — positive outcomes expected and risks introduced.
6. Store ADR in docs/decisions/ with sequential numbering and link from relevant code.

## Saída esperada
1. ADR document in standard format (Status/Context/Decision/Consequences).
2. Options matrix with evaluated tradeoffs.
3. Link map between ADR and affected code/systems.
4. Decision index for project ADR history.
