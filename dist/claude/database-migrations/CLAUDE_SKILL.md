Skill: Database Migrations & Schema Evolution
Description: Plan and execute safe database schema migrations with zero-downtime strategies. Use to add columns, rename tables, backfill data, and evolve schema without breaking running services. Base operacional: # Playbook  ## Objective Execute safe, reversible database schema changes without service disruption.  ## Rules of Classification
Triggers: migrations, schema change, database evolution, alter table, backfill, zero downtime migration, schema versioning
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Classify migration — additive (safe), destructive (risky), or data backfill (complex).
- 2. Write forward migration with explicit rollback script.
- 3. For destructive changes, use expand-contract pattern — add new, migrate data, remove old.
- 4. Test migration on staging with production data snapshot before applying to prod.
- 5. Apply migration, regenerate Supabase types, and validate application health.
- 6. Document schema change in ADR with rationale and impact assessment.
Output Contract:
- Migration file with rollback script.
- Classification of migration risk level.
- Expand-contract plan for destructive changes.
- Post-migration validation checklist.
- Updated schema documentation.