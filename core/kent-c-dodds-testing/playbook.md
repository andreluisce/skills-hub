# Playbook

## Objetivo
Maximizar confiança de produto com testes que validam comportamento real e não detalhes de implementacao.

## Regras
- Quanto mais o teste se parecer com o uso real, maior sua confianca.
- Priorizar testes de integracao sobre excesso de unitarios acoplados.
- Consultar UI por papel, nome acessivel e texto visivel; evitar seletores de estrutura.
- Preferir `@testing-library/user-event` para interacoes reais em vez de `fireEvent` bruto.
- Mockar apenas fronteiras externas (rede, terceiros, tempo); evitar mockar internals do app.
- Usar MSW para HTTP em testes de integracao e E2E locais.
- Cobrir fluxos felizes e estados de erro importantes; evitar cobertura inflada sem valor.
- Reduzir snapshots amplos; snapshots pequenos apenas quando agregam sinal.

## Heuristica de distribuicao (Testing Trophy)
- Static: lint, types e testes estaticos de contrato.
- Unit: funcoes puras e regras de dominio isoladas.
- Integration: prioridade principal para componentes + estado + rede simulada.
- E2E: poucos fluxos criticos de ponta a ponta para validar confianca final.

## Checklist de qualidade
- O teste falha quando o usuario realmente quebraria?
- O teste continua valido apos refactor sem mudanca de comportamento?
- O setup e minimo e legivel?
- O motivo da falha e acionavel para o time?
