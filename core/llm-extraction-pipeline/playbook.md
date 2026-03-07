# Playbook

## Objective
Use LLMs to extract structured data from unstructured documents with schema validation and quality control.

## Rules of Schema Design
- Define the target JSON Schema before writing any prompt — schema drives the prompt.
- Use strict types: no `string` where a `number` or `enum` is expected.
- Mark nullable fields explicitly — don't let the LLM invent values for missing data.

## Rules of Prompt Engineering
- Provide the full JSON Schema in the prompt — never describe structure in prose alone.
- Include 2-3 few-shot examples covering edge cases (missing fields, unusual formatting).
- Instruct explicitly: "If a field is not present, return null — do not invent values."

## Rules of Structured Output
- Use `response_format: { type: 'json_schema' }` (OpenAI) or `tool_use` (Claude) — never parse free text JSON.
- Validate LLM output against the JSON Schema programmatically after every call.
- On schema validation failure: retry once with the validation error included in the prompt.

## Rules of Quality
- Set a confidence threshold per field — fields below threshold go to human review queue.
- Track extraction accuracy metrics per document type — model, prompt version, schema version.
- Run regression tests on extraction prompts before deploying prompt updates.

## Rules of Cost and Scale
- Cache extraction results by document hash — never re-extract the same document.
- Batch documents by type and use the smallest model that meets accuracy requirements.
- Track cost per document type — set budget alerts per pipeline run.
