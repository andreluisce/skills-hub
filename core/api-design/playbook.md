# Playbook

## Sources
- Designing Web APIs — Brenda Jin
- Irresistible APIs — Kirsten Hunter

## Objetivo
Projetar APIs que são intuitivas, consistentes e seguras sem necessidade de documentação extensa.

## Regras
- Recursos são substantivos, não verbos: /documents não /getDocuments.
- GET nunca tem efeito colateral.
- Consistência acima de tudo — mesma estrutura de resposta em todos os endpoints.
- Erros são descritivos e acionáveis: { error: { code, message, details } }.
- Validação Zod obrigatória antes de qualquer operação de banco.
- Autorização verificada em cada route, nunca apenas no middleware.
- Nunca exponha stack traces em respostas de erro.

## Response Contracts
- Lista: { data: [], pagination: { total, page, per_page, total_pages } }
- Single: { data: {} }
- Erro: { error: { code, message, details?: [] } }
