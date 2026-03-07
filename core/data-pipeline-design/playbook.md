# Playbook

## Objective
Design reliable, observable, and idempotent data pipelines that handle failures gracefully.

## Rules of Pattern Selection
- ETL (Transform before load): when target schema is strict and source data is messy.
- ELT (Transform after load): when raw data has value and transformation evolves over time.
- Batch: when latency > 1 hour is acceptable and volume is high.
- Streaming: when latency < 1 minute is required — adds significant operational complexity.

## Rules of Idempotency
- Every pipeline stage must produce the same result when re-run with the same input.
- Use upsert (INSERT ... ON CONFLICT) — never plain INSERT in pipelines.
- Track processed record IDs — skip already-processed records on re-run.

## Rules of Failure Handling
- Every pipeline must have a dead letter queue for records that fail after max retries.
- Alert on DLQ growth — stale failed records are a data integrity risk.
- Never silently swallow errors — log with enough context to reproduce the failure.

## Rules of Observability
- Track per-run metrics: records processed, records failed, duration, cost.
- Alert on: pipeline failure, duration exceeding 2x baseline, error rate above 1%.
- Log data quality issues separately from pipeline errors — different owners, different urgency.

## Rules of Data Quality
- Validate schema at ingestion boundary — reject malformed records early.
- Track data freshness — alert when pipeline hasn't completed within expected window.
- Never write partial results to the target without a transaction or atomic swap.
