# Playbook

## Objective
Execute safe, reversible database schema changes without service disruption.

## Rules of Classification
- Label every migration: ADDITIVE (add column/table), DESTRUCTIVE (drop/rename), or BACKFILL (data change).
- Destructive migrations require explicit human approval before running on production.
- Never combine schema change + data backfill in a single migration file.

## Rules of Safety
- Every migration must have a corresponding rollback script.
- Use expand-contract for breaking changes: add new → migrate data → deprecate old → drop old (separate migrations).
- Never rename a column directly — add new column, copy data, update app, drop old column.

## Rules of Testing
- Run migration on staging with a production data snapshot before applying to prod.
- Validate row counts and data integrity after each migration step.
- Check application health metrics for 10 minutes after applying to production.

## Rules of Documentation
- Create an ADR for every migration that changes existing data semantics.
- Regenerate Supabase types immediately after migration: `pnpm types:generate`.
- Update seed data and test fixtures to match new schema.

## Rules of Timing
- Run heavy backfills in batches (1000 rows/batch) with a delay between batches.
- Schedule destructive migrations during low-traffic windows.
- Never hold long-running locks — use `ALTER TABLE ... CONCURRENTLY` where possible.
