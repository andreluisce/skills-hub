# Auditoria — Fase 1: Arquitetura & Estrutura
Projeto: ~/workspaces/personal/cog-ministry-docs

## Objetivo
Avaliar boundaries de domínio, organização de pacotes, estratégias RSC/Client e governança de monorepo.

## Skills ativas nesta fase

### react-frontend-architecture
<skill>
---
name: react-frontend-architecture-2026
description: Arquitetar e refatorar frontend com Next.js 15+, React 19+, TanStack Query, shadcn/ui e monorepo, com foco em fronteiras de domínio, contratos entre pacotes e qualidade evolutiva.
---
# React Frontend Architecture 2026

## Stack
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Classificar contexto de produto, risco e limites de domínio.
2. Definir blueprint com boundaries e contratos por pacote.
3. Escolher estratégia RSC/Client e cache de dados no TanStack Query.
4. Implementar com SOLID, KISS, DRY e regras de governança no monorepo.
5. Validar com auditoria técnica, métricas e plano incremental.

## Output esperado
1. Diagnóstico objetivo do estado atual.
2. Arquitetura alvo por módulos e pacotes.
3. Plano de migração em etapas pequenas.
4. Critérios de qualidade e observabilidade.
5. Tradeoffs e riscos aceitos.

# Playbook

## Stack padrão
- Next.js 15+ App Router com Server Components por padrão.
- React 19+ para UI e boundaries Client quando necessário.
- TanStack Query para estado de servidor e invalidação explícita.
- shadcn/ui + Tailwind v4 com tokens semânticos e cva/cn.
- Monorepo com apps e packages de domínio/design system/shared.

## Regras essenciais
- Proibir import profundo entre pacotes.
- Expor somente surface pública por package.
- Separar ui/application/domain/infra em features críticas.
- Encapsular SDK externo em adapters.
</skill>

### next15-app-router-architecture
<skill>
---
name: next15-app-router-architecture
description: Definir e refatorar arquitetura em Next.js 15+ App Router com Server Components-first, boundaries Client, streaming e cache orientado a domínio para apps React 19+ em monorepo.
---
# Next.js 15 App Router Architecture

## Stack
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Mapear rotas, segmentos dinâmicos e requisitos de renderização por página.
2. Definir fronteiras Server vs Client por responsabilidade e custo de hidratação.
3. Projetar estratégia de cache e revalidação por domínio de dados.
4. Estruturar loaders, actions e error boundaries por segmento.
5. Validar performance com Web Vitals e perfil de render em navegação real.

## Output esperado
1. Mapa de rotas e boundaries Server/Client.
2. Decisões de cache/revalidação por domínio.
3. Plano de implementação por segmento.
4. Checklist de performance e regressão.

# Playbook

## Objetivo
Projetar App Router com mínimo JS de cliente e máxima previsibilidade operacional.

## Regras
- Server Components por padrão; Client apenas quando houver interatividade real.
- Cache e invalidação explícitos por tipo de dado e criticidade.
- Error/loading boundaries definidos no nível correto de rota.
- Evitar lógica de domínio em componentes de página.
</skill>

### monorepo-frontend-governance
<skill>
---
name: monorepo-frontend-governance
description: Estruturar governança técnica de monorepo frontend com apps Next.js 15+, pacotes compartilhados React 19+, boundaries de dependência, ownership, versionamento e fluxo de entrega sustentável.
---
# Monorepo Frontend Governance

## Stack
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Definir topologia do monorepo e responsabilidades por pacote/app.
2. Estabelecer regras de dependência e imports permitidos.
3. Formalizar ownership, revisão e política de mudanças.
4. Padronizar pipelines de build, test e release por escopo.
5. Monitorar lead time, falhas de integração e custo de manutenção.

## Output esperado
1. Mapa de apps/pacotes e ownership.
2. Matriz de dependências permitidas.
3. Regras de pipeline e release.
4. Métricas de saúde do monorepo.

# Playbook

## Objetivo
Garantir escala de time e código sem erosão arquitetural.

## Regras
- Proibir imports profundos entre pacotes.
- API pública obrigatória por pacote.
- Donos explícitos por domínio técnico.
- Mudança cross-package requer checklist arquitetural.
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
