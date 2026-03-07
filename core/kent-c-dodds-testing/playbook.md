# Playbook

## Objective
Maximize confidence of product with tests that validate real behavior and not implementation details.

## Rules
- Quanto mais o teste se parecer with o uso real, maior sua confidence.
- Priorizar testes of integration sobre excesso of unitarios acoplados.
- Consultar UI by papel, nome acessivel e texto visivel; evitar seletores of estrutura.
- Preferir `@testing-library/user-event` for interactions reais in vez of `fireEvent` bruto.
- Mockar apenas fronteiras externas (rede, terceiros, tempo); evitar mockar internals do app.
- Usar MSW for HTTP in testes of integration e E2E locais.
- Cobrir flows felizes e estados of error importantes; evitar cobertura inflada without valor.
- Reduzir snapshots amplos; snapshots pequenos apenas when agregam sinal.

## Heuristica of distribuicao (Testing Trophy)
- Static: lint, types e testes estaticos of contrato.
- Unit: functions puras e rules of dominio isoladas.
- Integration: prioridade principal for components + estado + rede simulada.
- E2E: few end-to-end critical flows to validate final confidence.

## Checklist of qualidade
- Does the test fail when a real user-impacting break happens?
- O teste continuous valido apos refactor without mudanca of comportamento?
- O setup e minimo e legivel?
- O motivo da falha e acionavel for o time?
