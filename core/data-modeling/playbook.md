# Playbook

## Objective
Design correct, performant, and evolvable data models that accurately represent the domain.

## Rules of Entity Design
- Name entities after domain concepts — not after UI screens or API endpoints.
- Every table needs a surrogate primary key (UUID) — never use business data as PK.
- Use timestamptz for all timestamps — never timestamp without timezone.

## Rules of Normalization
- Start at 3NF — eliminate all transitive dependencies.
- Denormalize only with explicit performance justification and measured query data.
- Document every denormalization decision in an ADR.

## Rules of Relationships
- Define cardinality explicitly in the schema (UNIQUE constraint for 1:1, FK for 1:N, junction table for M:N).
- Set FK constraints with explicit ON DELETE behavior — never leave it as default.
- Name junction tables after the relationship: `user_roles`, `order_items` — not `user_role_mapping`.

## Rules of Data Types
- Use `uuid` for IDs, `timestamptz` for times, `numeric(precision, scale)` for money — never `float`.
- Use Postgres enums for fixed value sets — not varchar with a check constraint.
- Store phone numbers as `text` — never `numeric` (leading zeros, international format).

## Rules of Indexes
- Index every FK column — Postgres does not do this automatically.
- Composite indexes: column order matters — most selective column first.
- Use partial indexes for filtered queries (e.g., `WHERE deleted_at IS NULL`).
