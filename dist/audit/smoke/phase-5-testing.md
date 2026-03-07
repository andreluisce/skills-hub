# Auditoria — Fase 5: Qualidade & Testes
Projeto: ~/workspaces/personal/cog-ministry-docs

## Objetivo
Avaliar cobertura de comportamento, confianca da suite e estrategia de mocks segundo Testing Trophy.

## Skills ativas nesta fase

### kent-c-dodds-testing
<skill>
---
name: kent-c-dodds-testing
description: Define and apply user-oriented testing strategy with principles from Kent C. Dodds and Testing Library, prioritizing real confidence of product, tests of integration, accessible selectors and mocks at the network border.
---
# Kent C. Dodds Testing Strategy

## Stack
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Map critical user flows and classify risk by functionality.
2. Define practical pyramid with Testing Trophy and focus on integration.
3. Write tests from a user perspective with accessible queries and user-events.
4. Replace fragile mocks with MSW and mock only external borders.
5. Audit suite stability, speed and false positive rate.

## Output esperado
1. Matrix of critical scenarios and recommended level of testing.
2. Guide of test patterns (Arrange/Act/Assert, queries and mocks).
3. Plan of migration of fragile tests to tests of behavior.
4. Checklist of suite quality and reliability.

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
</skill>

## Instruções de execução

1. **SCAN** — Leia a estrutura do projeto e os arquivos relevantes para esta fase.
2. **DIAGNOSE** — Liste todos os achados por severidade:
   - 🔴 Crítico — viola regra obrigatória de uma skill, causa bug ou debt grave.
   - 🟡 Médio — melhoria importante, risco moderado.
   - 🟢 Sugestão — refinamento de qualidade.
   Cada achado deve citar: **arquivo**, **linha**, **regra violada**, **skill de origem**.
3. **FIX** — Aplique correções em diffs pequenos e atômicos.
   - Para cada fix: explique a intenção + aplique a mudança.
   - Priorize 🔴 antes de 🟡. Ignore 🟢 se houver muitos achados críticos.
4. **VERIFY** — Rode os comandos de verificação após cada lote:
   ```
   pnpm lint
   pnpm build
   ```
   Se quebrar, ajuste até passar.
5. **REPORT** — Gere saída estruturada ao final:
   - **summary**: o que mudou e por quê
   - **files_changed**: lista de arquivos alterados
   - **risks**: pendências e próximos passos

## Regras
- NÃO altere lógica de negócio sem justificativa explícita.
- Se uma correção tem risco alto, apenas reporte sem aplicar.
- Mantenha commits pequenos e atômicos se o projeto estiver sob git.
