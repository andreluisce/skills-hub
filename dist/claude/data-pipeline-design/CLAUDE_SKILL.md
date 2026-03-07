Skill: Data Pipeline Design
Description: Design and implement data pipelines for ingestion, transformation, and delivery. Use to choose between ETL and ELT patterns, design batch vs streaming pipelines, handle failures, ensure idempotency, and monitor pipeline health. Base operacional: # Playbook  ## Objective Design reliable, observable, and idempotent data pipelines that handle failures gracefully.  ## Rules of Pattern Selection
Triggers: data pipeline, etl, elt, data ingestion, data transformation, streaming, batch processing, pipeline design, data flow
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Define pipeline requirements — data sources, volume, latency SLA, and destination.
- 2. Choose pattern — ETL vs ELT, batch vs streaming, push vs pull.
- 3. Design transformation logic — normalization, deduplication, enrichment, validation.
- 4. Implement idempotency — pipelines must produce the same result when re-run.
- 5. Design failure handling — dead letter queues, retry policies, alerting on failures.
- 6. Define observability — pipeline run metrics, data quality metrics, SLA tracking.
Output Contract:
- Pipeline architecture diagram with data flow.
- Pattern decision (ETL/ELT, batch/streaming) with rationale.
- Transformation logic specification.
- Idempotency strategy per pipeline stage.
- Failure handling and monitoring plan.