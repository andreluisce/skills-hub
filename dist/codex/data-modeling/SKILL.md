---
name: data-modeling
description: Design relational and document data models that are correct, normalized, and performant. Use to create entity-relationship diagrams, decide normalization level, design junction tables, choose data types, and balance read vs write performance. Base operacional: # Playbook  ## Objective Design correct, performant, and evolvable data models that accurately represent the domain.  ## Rules of Entity Design Use quando o pedido envolver: data model, entity relationship, erd, schema design, normalization, denormalization, database design, table design.
---

# Data Modeling

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Identify entities, attributes, and relationships from domain requirements.
2. Create ERD — define cardinality (1:1, 1:N, M:N) and mandatory vs optional relationships.
3. Normalize to 3NF — eliminate redundancy while preserving query performance.
4. Evaluate denormalization — add computed columns or materialized views where read performance justifies.
5. Choose data types — prefer specific types (uuid, timestamptz, numeric) over generic (text, json).
6. Document model with table definitions, constraints, indexes, and relationship rationale.

## Saída esperada
1. ERD diagram with entities and relationships.
2. Table definitions with columns, types, and constraints.
3. Normalization rationale per design decision.
4. Index strategy per table.
5. Denormalization decisions with performance justification.
