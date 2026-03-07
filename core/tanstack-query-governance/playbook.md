# Playbook

## Objetivo
Tornar o estado de servidor previsível, auditável e eficiente.

## Regras
- Toda query key deve ser determinística e documentada.
- Invalidação baseada em eventos de negócio, não em conveniência.
- Retry e backoff diferentes por tipo de erro.
- Estado de UI não deve vazar para cache de servidor.
