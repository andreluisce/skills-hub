# Playbook

## Objetivo
Projetar App Router com mínimo JS de cliente e máxima previsibilidade operacional.

## Regras
- Server Components por padrão; Client apenas quando houver interatividade real.
- Cache e invalidação explícitos por tipo de dado e criticidade.
- Error/loading boundaries definidos no nível correto de rota.
- Evitar lógica de domínio em componentes de página.
