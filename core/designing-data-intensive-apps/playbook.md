# Playbook

## Source
Designing Data-Intensive Applications — Martin Kleppmann

## Objective
Build reliable, scalable and easy to maintain data systems.

## Rules
- Reliability: o sistema funciona corretamente mesmo when algo falha.
- Scalability: identify the actual load parameter before optimizing.
- Maintainability: operabilidade, simplicidade e evolucionabilidade.
- Indices: crie apenas for colunas usadas in WHERE/JOIN/ORDER BY frequentes.
- Normalization as standard — denormalization only with evidence of latency problem.
- Transactions for compound operations that must be atomic.
- Eventual consistency: acceptable for logs/stats, unacceptable for status of jobs or financial data.
- Cache: Proactively invalidate after mutations. Deterministic keys.
- Metrics: P50, P95, P99 — not just average.
