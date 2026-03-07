# Playbook

## Source
Designing Data-Intensive Applications — Martin Kleppmann

## Objetivo
Construir sistemas de dados confiáveis, escaláveis e fáceis de manter.

## Regras
- Reliability: o sistema funciona corretamente mesmo quando algo falha.
- Scalability: identifique o parâmetro de carga real antes de otimizar.
- Maintainability: operabilidade, simplicidade e evolucionabilidade.
- Indices: crie apenas para colunas usadas em WHERE/JOIN/ORDER BY frequentes.
- Normalização como padrão — desnormalização apenas com evidência de problema de latência.
- Transações para operações compostas que devem ser atômicas.
- Consistência eventual: aceitável para logs/stats, inaceitável para status de jobs ou dados financeiros.
- Cache: invalide proativamente após mutações. Keys determinísticas.
- Métricas: P50, P95, P99 — não apenas média.
