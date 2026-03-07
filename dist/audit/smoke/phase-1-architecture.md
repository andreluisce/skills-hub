# Auditoria — Fase 1: Arquitetura & Estrutura
Projeto: ~/workspaces/personal/cog-ministry-docs

## Objetivo
Avaliar boundaries de domínio, organização de pacotes, estratégias RSC/Client e governança de monorepo.

## Skills ativas nesta fase

### react-frontend-architecture
<skill>
---
name: react-frontend-architecture-2026
description: Architect and refactor frontend with Next.js 15+, React 19+, TanStack Query, shadcn/ui and monorepo, focused on domain boundaries, contracts between packages and evolutionary quality.
---
# React Frontend Architecture 2026

## Stack
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Classify context of product, risk and limits of domain.
2. Define blueprint with boundaries and contracts by package.
3. Escolher strategy RSC/Client and cache of data in TanStack Query.
4. Implementar with SOLID, KISS, DRY and rules of governance in monorepo.
5. Validate with technical audit, metrics and incremental plan.

## Output esperado
1. Objective diagnosis of the current state.
2. Target architecture by modules and packages.
3. Plan the migration in small steps.
4. Quality and observability criteria.
5. Tradeoffs and riscos aceitos.

# Playbook

## Standard stack
- Next.js 15+ App Router with Server Components by standard.
- React 19+ for UI and Client boundaries when necessary.
- TanStack Query for server state and explicit invalidation.
- shadcn/ui + Tailwind v4 with semantic tokens and cva/cn.
- Monorepo with apps and packages of domain/design system/shared.

## Rules essenciais
- Proibir import profundo entre pacotes.
- Expose only public surface by package.
- Separate ui/application/domain/infra into critical features.
- Encapsular SDK externo in adapters.
</skill>

### next15-app-router-architecture
<skill>
---
name: next15-app-router-architecture
description: Define and refatorar architecture in Next.js 15+ App Router with Server Components-first, boundaries Client, streaming and cache orientado a domínio for apps React 19+ in monorepo.
---
# Next.js 15 App Router Architecture

## Stack
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Map routes, dynamic segments and page rendering requirements.
2. Define Server vs Client boundaries by responsibility and cost of hydration.
3. Design strategy of cache and revalidation by domain of data.
4. Estruturar loaders, actions and errorr boundaries by segmento.
5. Validate performance with Web Vitals and render profile in real browsing.

## Output esperado
1. Mapa of rotas and boundaries Server/Client.
2. Caching/revalidation decisions by domain.
3. Implementation plan by segment.
4. Checklist of performance and regression.

# Playbook

## Objective
Design App Router with minimal client JS and maximum operational predictability.

## Rules
- Server Components by standard; Client apenas when houver interatividade real.
- Explicit caching and invalidation by data type and criticality.
- Error/loading boundaries set at the correct level of route.
- Avoid logic of domain in components of page.
</skill>

### monorepo-frontend-governance
<skill>
---
name: monorepo-frontend-governance
description: Structure technical governance of monorepo frontend with Next.js 15+ apps, React 19+ shared packages, boundaries of dependency, ownership, versioning and sustainable flow of delivery.
---
# Monorepo Frontend Governance

## Stack
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Define monorepo topology and responsibilities for package/app.
2. Establish rules of dependency and allowed imports.
3. Formalize ownership, review and policy of changes.
4. Padronizar pipelines of build, test and release by escopo.
5. Monitor lead time, failures of integration and custo of maintenance.

## Output esperado
1. Mapa of apps/pacotes and ownership.
2. Array of allowed dependencies.
3. Rules of pipeline and release.
4. Monorepo health metrics.

# Playbook

## Objective
Ensure scale of time and code without architectural erosion.

## Rules
- Proibir imports profundos entre pacotes.
- Mandatory public API by package.
- Explicit owners by technical domain.
- Cross-package change requires architectural checklist.
</skill>

### nextjs-mastery
<skill>
---
name: nextjs-mastery
description: Skill para desenvolvimento avançado com Next.js 14+ App Router. Use para gerenciar Server/Client Components, otimização de rotas dinâmicas e fetching de dados regionalizado.
---
# Next.js Mastery
- **Padrão**: Priorizar Server Components.
- **Data Fetching**: Usar fetch no servidor com revalidação baseada em tags do Supabase.
- **I18n**: Integrar com o middleware de locale para prefixos de rota /[locale].
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
