# Playbook

## Sources
- Designing Web APIs — Brenda Jin
- Irresistible APIs — Kirsten Hunter

## Objective
Design APIs that are intuitive, consistent, and secure without the need for extensive documentation.

## Rules
- Resources are nouns, not verbs: /documents not /getDocuments.
- GET nunca tem efeito colateral.
- Consistency above all — same response structure across all endpoints.
- Errors are descriptive and actionable: { errorr: { code, message, details } }.
- Mandatory Zod validation before any bank operation.
- Authorization checked on each route, never just in the middleware.
- Nunca exponha stack traces in respostas of error.

## Response Contracts
- Lista: { data: [], pagination: { total, page, per_page, total_pages } }
- Single: { data: {} }
- Erro: { errorr: { code, message, details?: [] } }
