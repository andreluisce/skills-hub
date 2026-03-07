Skill: LLM Extraction Pipeline
Description: Build pipelines that use LLMs to extract, normalize, and validate structured data from unstructured documents. Use to design prompts for structured output, handle multi-document batching, validate against schemas, and manage extraction quality. Base operacional: # Playbook  ## Objective Use LLMs to extract structured data from unstructured documents with schema validation and quality control.  ## Rules of Schema Design
Triggers: llm extraction, structured output, document extraction, prompt engineering extraction, json schema extraction, batch document processing, extraction pipeline, data normalization
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Define target schema — JSON Schema for the structured output expected from each document type.
- 2. Design extraction prompt with schema enforcement, examples, and edge case instructions.
- 3. Implement structured output call (response_format or tool_use) with model selection.
- 4. Validate LLM output against JSON Schema — reject and retry on schema violation.
- 5. Handle batch processing — chunking, parallelism, rate limiting, and cost tracking.
- 6. Implement human review queue for low-confidence or schema-failing extractions.
Output Contract:
- Extraction prompt templates per document type.
- JSON Schema definitions for all output types.
- Validation pipeline with retry and escalation logic.
- Batch processing configuration with cost estimate.
- Human review queue specification.