# Auditoria — Fase 5: Qualidade & Testes
Projeto: ~/workspaces/personal/cog-ministry-docs

## Objetivo
Avaliar cobertura de comportamento, confianca da suite e estrategia de mocks segundo Testing Trophy.

## Skills ativas nesta fase

### kent-c-dodds-testing
<skill>
---
name: kent-c-dodds-testing
description: Definir e aplicar estratégia de testes orientada ao usuário com princípios de Kent C. Dodds e Testing Library, priorizando confiança real de produto, testes de integração, seletores acessíveis e mocks na fronteira da rede.
---
# Kent C. Dodds Testing Strategy

## Stack
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Mapear fluxos críticos de usuário e classificar risco por funcionalidade.
2. Definir pirâmide prática com Testing Trophy e foco em integração.
3. Escrever testes pela ótica do usuário com queries acessíveis e user-event.
4. Substituir mocks frágeis por MSW e mockar somente fronteiras externas.
5. Auditar estabilidade, velocidade e taxa de falso positivo da suíte.

## Output esperado
1. Matriz de cenários críticos e nível de teste recomendado.
2. Guia de padrões de teste (Arrange/Act/Assert, queries e mocks).
3. Plano de migração de testes frágeis para testes de comportamento.
4. Checklist de qualidade e confiabilidade da suíte.

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
