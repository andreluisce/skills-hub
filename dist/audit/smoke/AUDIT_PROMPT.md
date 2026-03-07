# MASTER AUDIT PROMPT
Runner alvo: generic
Projeto: ~/workspaces/personal/cog-ministry-docs
Projeto (imports): cog-ministry-docs

## Objetivo
Executar uma auditoria técnica e de UX em pipeline, aplicando todas as skills abaixo em 4 fases.

## Índice de fases
- Fase 1 (Arquitetura & Estrutura): 4 skill(s) [react-frontend-architecture, next15-app-router-architecture, monorepo-frontend-governance, nextjs-mastery]
- Fase 2 (Componentes & Design System): 5 skill(s) [react19-component-patterns, shadcn-design-system-ops, master-ux-ui, shadcn-dark-design, react-patterns]
- Fase 3 (Dados & Infraestrutura): 2 skill(s) [tanstack-query-governance, supabase-expert]
- Fase 4 (UX & Experiência): 9 skill(s) [ux-cognitive-architecture, ux-behavioral-loop, ux-visual-systems, ux-cpa-orchestrator, ux-emotional-stakeholder, ux-ethics-bias, ux-lean-experimentation, ux-sustainable-product, ui-ux-operations]
- Fase 5 (Qualidade & Testes): 1 skill(s) [kent-c-dodds-testing]

## Protocolo de execução
1. Execute as fases em ordem: 1 → 2 → 3 → 4.
2. Em cada fase: SCAN, DIAGNOSE, FIX, VERIFY, REPORT.
3. Preserve mudanças válidas de fases anteriores; não reverta correções já aplicadas.
4. Se uma mudança for arriscada, reporte e não aplique.
5. No final da fase 4, gere um relatório consolidado:
   - summary
   - files_changed
   - open_risks
   - next_steps

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

---

# Auditoria — Fase 2: Componentes & Design System
Projeto: ~/workspaces/personal/cog-ministry-docs

## Objetivo
Avaliar padrões de componentes React 19, uso de shadcn/ui, tokens de design e acessibilidade.

## Skills ativas nesta fase

### react19-component-patterns
<skill>
---
name: react19-component-patterns
description: Apply advanced patterns of React 19+ components to reduce coupling, improve composition and eliminate anti-patterns in scalable interfaces with shadcn/ui and domain-oriented architecture.
---
# React 19 Component Patterns

## Stack
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Audit critical components and identify recurring anti-patterns.
2. Separate presentation, orchestration and rules of domain.
3. Apply composition with explicit contracts of props and states.
4. Consolidate standards of accessibility and feedback of interaction.
5. Define plan of incremental refactoring with criteria of acceptance.

## Output esperado
1. Diagnóstico of anti-patterns by component.
2. Target pattern of composition and contracts.
3. Batch refactoring strategy.
4. Criteria of accessibility and consistency.

# Playbook

## Objective
Padronizar components React 19 for previsibilidade of maintenance e evolution.

## Rules
- Componentes visuais without efeitos colaterais.
- Hooks of orchestration isolated by feature.
- Contratos of props pequenos e coesos.
- Reuse via composition, not implicit inheritance.
</skill>

### shadcn-design-system-ops
<skill>
---
name: shadcn-design-system-ops
description: Operate and evolve design system with shadcn/ui and Tailwind v4, standardizing tokens, variants, accessibility and governance of components for multiple apps in monorepo Next.js 15+ and React 19+.
---
# shadcn Design System Operations

## Stack
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Define global semantic tokens and variations by theme/context.
2. Establish standards of base components and variants with cva.
3. Create contribution and review policy for new components.
4. Validate accessibility, visible focus and contrast in critical flows.
5. Publish changelog of DS and plan of adoption by app.

## Output esperado
1. Catalog of tokens and approved variants.
2. Guide of contribution of components.
3. Checklist of accessibility operacional.
4. Design system rollout strategy.

# Playbook

## Objective
Escalar UI consistente entre apps without travar evolution of product.

## Rules
- Semantic token before hardcoded color.
- `cva` for variants; `cn()` for safe composition.
- Componente novo exige contrato, estado e criteria of accessibility.
- Avoid duplication of components between packages.
</skill>

### master-ux-ui
<skill>
---
name: master-ux-ui
description: Super Mega Ultra Skill de UX e UI Design. Use para criar ou refatorar interfaces, componentes, formulários e layouts focando em usabilidade extrema, hierarquia visual impecável e clareza cognitiva baseada nos princípios de "Refactoring UI", "Laws of UX" e "Don't Make Me Think".
---
# 🧠 The Master UX/UI Principles

Esta skill carrega os princípios definitivos de UX e UI baseados em clássicos do design para garantir que o CMS Ministerial não seja apenas funcional, mas excepcional e intuitivo.

## 1. Don't Make Me Think (Steve Krug) - Clareza Extrema
- **Evite Carga Cognitiva**: O usuário deve entender como a tela funciona olhando para ela por 1 segundo, sem precisar ler manuais.
- **Convenções Importam**: Use ícones e padrões estabelecidos (ex: Lupa para buscar, X para fechar). Não tente ser "criativo" com a usabilidade básica.
- **Hierarquia Inegável**: O que é mais importante na tela deve ser a primeira coisa que os olhos encontram.
- **Call-to-Actions (CTAs) Claros**: Botões primários devem ter cor forte de preenchimento. Botões secundários devem ser "fantasmas" (ghost) ou apenas bordas.

## 2. Refactoring UI (Steve Schoger & Adam Wathan) - Polimento
- **Comece sem Cores (Wireframe Mental)**: Defina a hierarquia usando apenas tons de cinza, tamanhos e pesos de fonte. Só depois aplique a cor de destaque (Brand Color).
- **Brinque com Pesos, não apenas Tamanhos**: Em vez de aumentar a fonte de um título de 16px para 24px, tente mantê-lo em 16px mas mude o `font-weight` para 800 (ExtraBold) e deixe o subtítulo com `font-weight` 400 (Regular) e cinza.
- **Espaçamento é o Novo CSS**: Elementos não devem brigar por espaço. Use margins e paddings generosos (`gap-6`, `p-8` em Tailwind) para dar "respiro".
- **Evite Muitas Bordas**: Para separar conteúdos ou criar "Cards", prefira usar uma cor de fundo sutil (como um Slate-50) ou uma sombra suave (`shadow-sm`) em vez de desenhar linhas grossas ao redor de tudo.

## 3. Laws of UX (Jon Yablonski) - Psicologia
- **Lei de Jakob**: O usuário passa a maior parte do tempo em *outros* sites. Ele espera que o seu funcione da mesma forma. Siga os padrões web atuais.
- **Lei de Hick**: O tempo para atingir o alvo é função da distância e do tamanho do alvo. Faça botões grandes e fáceis de clicar (mínimo de `h-10` ou `h-12`).
- **Lei de Miller**: O tempo para tomar uma decisão aumenta com o número e a complexidade das escolhas. Limite opções na tela. Divida formulários gigantes em Steps (Passo a Passo).
- **Aesthetics-Usability Effect**: Usuários tendem a considerar que "o que é mais bonito funciona melhor". Um design limpo diminui a percepção de bugs.

## 4. UI/UX Operations (Práticas de Desenvolvimento)
- **Feedback em Tempo Real**: Sempre use "Loading States" (spinners/skeletons) após um clique. O sistema nunca deve parecer "congelado".
- **Erros Acionáveis**: Nunca mostre "Erro 500". Mostre "Ops, não conseguimos salvar este CPF porque ele já existe. Deseja editá-lo?".
- **Prevenção de Erros (The Design of Everyday Things)**: Em formulários críticos (como emissão de credenciais), desabilite o botão de "Salvar" até que os dados obrigatórios estejam preenchidos corretamente, em vez de deixar o usuário clicar e receber um erro depois.
- **Micro-interações**: Adicione `transition-all duration-200` em botões e links. O `hover:` e `focus:` devem dar retorno visual imediato.

## 🛠️ Diretriz de Execução (AI Prompting)
Sempre que for criar ou refatorar um componente React/Next.js ou arquivo de Layout (como o verso da credencial), aplique automaticamente **todos** os princípios acima. Use Tailwind CSS ou Vanilla CSS priorizando a harmonia descrita nesta Skill.
</skill>

### shadcn-dark-design
<skill>
---
name: shadcn-dark-design
description: Skill para criação de interfaces usando shadcn/ui com foco exclusivo em Tema Escuro. Use para customizar componentes, gerenciar variáveis CSS no globals.css e garantir contraste acessível.
---
# Shadcn Dark Design
- **Cores**: Usar apenas a paleta semântica definida em tailwind.config.js.
- **Consistência**: Garantir que componentes como Accordion, Dialog e Tabs sigam o estilo visual Aurora/Royal.
</skill>

### react-patterns
<skill>
---
name: react-patterns
description: Skill para padrões avançados de React. Use para gerenciamento de estado global (Zustand/Context), hooks customizados para formulários complexos e otimização de renderização.
---
# React Patterns
- **Estado**: Use Zustand para estados globais como o progresso de impressão.
- **Formulários**: Use React Hook Form com validação Zod sincronizada com o schema do banco.
- **Interações**: Use Framer Motion para feedbacks visuais de carregamento e transições.
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

---

# Auditoria — Fase 3: Dados & Infraestrutura
Projeto: ~/workspaces/personal/cog-ministry-docs

## Objetivo
Avaliar gestão de estado de servidor, query keys, cache, invalidação, schema Supabase e RLS.

## Skills ativas nesta fase

### tanstack-query-governance
<skill>
---
name: tanstack-query-governance
description: Define governance of estado of servidor with TanStack Query in React 19+, including query keys, staleTime, invalidation, optimistic updates and políticas of error/retry for apps Next.js 15+ in monorepo.
---
# TanStack Query Governance

## Stack
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Classify domains of data by volatility and criticality.
2. Standardize convention of query keys and ownership by package.
3. Define staleTime, gcTime and rules of invalidation by evento.
4. Especificar optimistic updates, rollback and tratamento of error.
5. Monitor refetch rate, perceived latency and failures.

## Output esperado
1. Matrix of domains of data and policy of cache.
2. Official convention of query keys.
3. Rules of invalidation and optimistic update.
4. Indicadores of qualidade of server state.

# Playbook

## Objective
Make server status predictable, auditable and efficient.

## Rules
- Every query key must be deterministic and documented.
- Invalidation based on business events, not on convenience.
- Retry e backoff diferentes by tipo of error.
- Estado of UI not deve vazar for cache of servidor.
</skill>

### supabase-expert
<skill>
# Supabase Ministerial Expert

## Table Schema: `submissions`
| Column | Type | Description |
|---|---|---|
| id | uuid | Primary Key |
| applicant_id | uuid | FK to auth.users |
| form_data | jsonb | Full form content (Marriage/Divorce history) |
| signature_url | text | Path in Supabase Storage |
| status | text | pending, approved, rejected |
| locale | text | pt or en |

## RLS Policies
- **Applicants**: Can only insert their own submissions and read their own status.
- **Admins**: Full read access to all submissions; can update status.

## Storage
- `signatures/`: Private bucket for signature PNGs.
- `generated_pdfs/`: Secure storage for generated PDF documents.
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

---

# Auditoria — Fase 4: UX & Experiência
Projeto: ~/workspaces/personal/cog-ministry-docs

## Objetivo
Avaliar carga cognitiva, loops comportamentais, acessibilidade, ética de formulários e sustentabilidade.

## Skills ativas nesta fase

### ux-cognitive-architecture
<skill>
# Ministerial Cognitive Architecture

---
name: ux-cognitive-architecture
description: Especialista em arquitetura cognitiva de UX para o COG Ministry Docs. Use para reduzir a carga mental de candidatos e administradores, melhorando a orientação de tarefas em formulários complexos.
---

## 1. Princípios de Redução de Carga Cognitiva
O preenchimento de históricos de divórcio é emocionalmente e mentalmente exaustivo. Nossa missão é remover qualquer atrito técnico.

### A. Progressive Disclosure (Revelação Progressiva)
- **Regra**: Nunca mostre uma pergunta de "Motivo do Divórcio" se o candidato não selecionou que possui casamentos anteriores.
- **Implementação**: Utilize o estado do `react-hook-form` para renderizar condicionalmente seções inteiras.

### B. Chunking (Fatiamento de Tarefas)
- **Regra**: Divida o formulário Ministerial (Form 1) em no máximo 4 etapas claras:
    1. Identificação e Membresia.
    2. Histórico do Candidato.
    3. Histórico do Cônjuge.
    4. Afirmação e Assinatura.

### C. Mental Models (Modelos Mentais)
- Ministros estão acostumados com o layout do PDF físico (`sources/*.pdf`).
- **Ação**: A interface digital deve manter uma terminologia e uma ordem lógica que espelhe o documento oficial, mas otimizada para leitura em tela (Tema Escuro).

## 2. Padrões de Orientação (Wayfinding)
1. **Breadcrumbs/Progress Bar**: Sempre indique onde o usuário está e quanto falta para o PDF ser gerado.
2. **Inline Validation**: Não espere o usuário clicar em "Finalizar" para avisar que o e-mail está inválido ou que a assinatura é obrigatória.
3. **Empty States**: No dashboard administrativo, se não houver submissões, forneça uma ação clara (ex: "Convidar novo candidato").

## 3. Heurísticas de Usabilidade Ministerial
- **Prevenção de Erros**: Antes de permitir a assinatura, apresente um resumo de "Revisão de Dados".
- **Flexibilidade**: Permita que o usuário alterne entre Português e Inglês sem perder os dados já preenchidos (Estado persistente).
</skill>

### ux-behavioral-loop
<skill>
# Ministerial Behavioral Design

---
name: ux-behavioral-loop
description: Arquiteto de comportamento para o COG Ministry Docs. Use para desenhar loops de engajamento ético e garantir que o processo de preenchimento ministerial seja concluído com precisão e integridade.
---

## 1. O Loop de Preenchimento Ministerial
Nosso objetivo é transformar um processo burocrático em um fluxo de alta completude (High Completion Rate).

### A. Gatilho (Trigger)
- **Externo**: Convite por e-mail ou link do Secretário Regional.
- **Interno**: O desejo do candidato de obter/manter suas credenciais ministeriais.

### B. Ação (Action)
- Deve ser a menor unidade de esforço possível.
- **Exemplo**: "Preencher Nome" -> "Próximo". Nunca "Preencher todo o formulário de uma vez".

### C. Recompensa Variável (Reward)
- No contexto ministerial, a recompensa é o **Alívio Cognitivo** e a **Segurança**.
- **Visual**: Animações de checkmark ao completar seções e a visualização prévia do PDF assinado.

### D. Investimento (Investment)
- O usuário investe tempo preenchendo os dados e assinando.
- **Valor**: O sistema armazena o histórico (Supabase), permitindo que futuras renovações de credenciais sejam mais rápidas (Auto-fill).

## 2. Aplicando o Modelo de Fogg (B = MAP)
- **Behavior (Comportamento)**: Submeter o formulário assinado.
- **Motivation (Motivação)**: Alta (Carreira ministerial, conformidade com a Igreja).
- **Ability (Habilidade)**: Facilitada pelo Shadcn/UI, i18n claro e design responsivo.
- **Prompt (Gatilho)**: Call-to-actions (CTAs) claros como "Gerar PDF Oficial".

## 3. Ética e Integridade
- **Atrito Positivo**: Em seções de declaração de infidelidade ou abandono, use atrito positivo (ex: checkbox de confirmação extra) para garantir que o usuário leu e entendeu a gravidade da afirmação antes de assinar.
- **Dark Patterns**: É PROIBIDO o uso de dark patterns. O processo deve ser transparente e respeitar a autonomia do ministro.
</skill>

### ux-visual-systems
<skill>
# Ministerial UX Visual System

## Design Tokens (Dark Theme)
- **Background**: `#0a0a0a` (Deep Charcoal)
- **Primary**: `#3b82f6` (Church Blue) - Used for focus and action.
- **Accent**: `#121212` (Card surfaces with glassmorphism).
- **Text**: `#ededed` (High contrast for readability).

## Principles
1. **Focused Task Flow**: One primary question or section per step to prevent overwhelmed applicants.
2. **Immediate Feedback**: Real-time validation for complex ecclesiastical rules (e.g., divorce reason requirements).
3. **Accessibility**: High contrast and large click targets for older ministerial applicants.
4. **Consistency**: PDF output must match the UI hierarchy to provide a sense of continuity.
</skill>

### ux-cpa-orchestrator
<skill>
# Cognitive Product Architecture (CPA) Orchestrator - COG Ministry Edition

---
name: ux-cpa-orchestrator
description: Skill master da Cognitive Product Architecture (CPA). Use para orquestrar a análise completa de UX do COG Ministry Docs, integrando cognição, comportamento, UI, estratégia, ética e sustentabilidade no fluxo ministerial.
---

## 1. Visão Geral (CPA Framework)
Esta skill atua como o "cérebro" da arquitetura do projeto, garantindo que o preenchimento dos formulários de histórico de casamento/divórcio não seja apenas uma coleta de dados, mas uma experiência tecnicamente robusta e humanamente sensível.

## 2. Pilares de Orquestração Ministerial
### A. Arquitetura Cognitiva (Task-Oriented)
- **Objetivo**: Reduzir o custo de processamento mental para ministros.
- **Workflow**: Aplicar *Chunking* (fatiamento) em formulários longos. Ex: Separar "Dados Pessoais" de "Histórico Eclesiástico".
- **Trigger**: Quando um usuário tropeça em termos técnicos como "Conversão Inicial" ou "Abandono".

### B. Ciclos Comportamentais (Fogg Behavior Model)
- **Motivação**: Facilitar a submissão completa de dados sensíveis.
- **Habilidade**: Simplificar a interface via Shadcn/UI para que o comportamento ocorra sem fricção.
- **Gatilho**: O botão de "Download PDF" deve ser o prêmio final de um ciclo de preenchimento bem-sucedido.

### C. Ética e Segurança de Dados (Privacy-First)
- **Mandato**: Proteção total de PII (CPFs, Nomes, Assinaturas).
- **Implementação**: Garantir que as Row Level Security (RLS) do Supabase e as permissões de admin estejam blindadas.

## 3. Protocolo de Análise de Features
Sempre que uma nova pergunta ou regra de negócio for adicionada ao formulário:
1. **Validar via CPA**: Isso aumenta a carga cognitiva? Se sim, como simplificar?
2. **Impacto Comportamental**: O usuário terá motivação para responder isso honestamente?
3. **Sustentabilidade**: Como esse dado será armazenado e recuperado no PDF final sem desperdício de recursos?

## 4. Integração de Skills
- Utilize `ux-visual-systems` para a hierarquia das perguntas.
- Utilize `supabase-expert` para garantir que o `form_data` (JSONB) reflita a estrutura do CPA.
- Utilize `shadcn-dark-design` para garantir que o Tema Escuro mantenha o foco e a seriedade do documento.
</skill>

### ux-emotional-stakeholder
<skill>
# Ministerial Emotional Design & Stakeholders

---
name: ux-emotional-stakeholder
description: Especialista em design emocional e articulação de decisões de design para o COG Ministry Docs. Use para elevar a conexão com o usuário e defender decisões com Stakeholders (Bispos/Secretários).
---

## 1. Design Emocional no Contexto Eclesiástico
O processo de fornecer dados sobre divórcio pode evocar sentimentos de culpa, ansiedade ou vergonha.

### A. Nível Visceral (Aparência)
- O **Tema Escuro** e a tipografia limpa (Geist) transmitem seriedade, modernidade e respeito.
- A interface deve parecer um "instrumento oficial", não um brinquedo ou rede social.

### B. Nível Comportamental (Experiência)
- Respostas rápidas da interface e validações claras dão ao usuário uma sensação de controle e competência.
- O feedback visual de "PDF Gerado com Sucesso" proporciona alívio e fechamento (Closure).

### C. Nível Reflexivo (Significado)
- Após a submissão, o usuário deve sentir que cumpriu seu dever com integridade e que a tecnologia está a serviço do seu ministério.

## 2. Articulação com Stakeholders (Bispos e Secretários)
Ao apresentar o sistema para a liderança da Igreja:
- **Argumento de Segurança**: "Utilizamos Row Level Security e criptografia para garantir que os dados sensíveis dos pastores nunca vazem."
- **Argumento de Eficiência**: "O que levava semanas via correio agora é processado em minutos, com validação instantânea contra erros."
- **Argumento de Conformidade**: "A interface digital replica 100% das regras contidas no Manual da Igreja, garantindo fidelidade eclesiástica."

## 3. Gestão de Expectativas
- Use protótipos de alta fidelidade para alinhar visualmente com os Secretários antes de implementar mudanças pesadas no backend.
- Sempre valide se a "Assinatura Digital" tem validade jurídica/eclesiástica aceitável para o território específico.
</skill>

### ux-ethics-bias
<skill>
# Ministerial Ethics, Privacy & Bias

---
name: ux-ethics-bias
description: Especialista em vieses cognitivos e atrito positivo para o COG Ministry Docs. Use para proteger a integridade dos dados e a autonomia do usuário, prevenindo dark patterns em formulários eclesiásticos.
---

## 1. Proteção de Dados e Privacidade (Privacy-First)
Dados ministeriais são sensíveis. O histórico de divórcio e assinaturas digitais requerem tratamento de elite.

### A. Anonimização e Logs
- **Regra**: NUNCA registre CPFs, RGs ou conteúdos de `divorceReason` em logs de console ou serviços de monitoramento externos.
- **Supabase**: Utilize RLS (Row Level Security) rigoroso. O Admin vê tudo, mas o Candidato só acessa seus próprios dados.

### B. Consentimento Informado
- Antes da assinatura, o usuário deve ter um resumo claro: "Ao assinar, você confirma que [DADOS] serão enviados ao Escritório Regional e ao Conselho Executivo Internacional."

## 2. Prevenção de Vieses (Bias)
### A. Viés de Confirmação
- Não pré-selecione checkboxes que indiquem culpa ou motivos específicos de divórcio. O estado inicial deve ser neutro.

### B. Linguagem Inclusiva e Respeitosa
- As traduções em `messages/*.json` devem ser formais, porém acolhedoras, respeitando o contexto emocional do candidato.

## 3. Atrito Positivo vs. Dark Patterns
- **Atrito Positivo**: Use quando a ação é irreversível ou grave (ex: Apagar um formulário enviado ou assinar uma declaração legal). Use diálogos de confirmação explícitos.
- **Proibição de Dark Patterns**:
    - Sem botões de "Sair" escondidos.
    - Sem "opt-out" automático para compartilhamento de dados opcionais.
    - Sem pressão de tempo (fake scarcity) para preenchimento.

## 4. Checklist Ético para Devs
1. Este dado é REALMENTE necessário conforme o `sources/*.pdf`?
2. O usuário sabe exatamente quem terá acesso a esta assinatura?
3. O formulário é acessível para ministros com deficiências visuais ou motoras (WCAG)?
</skill>

### ux-lean-experimentation
<skill>
# Ministerial Lean Experimentation & MVP

---
name: ux-lean-experimentation
description: Estrategista de Lean UX e validação contínua para o COG Ministry Docs. Use para transformar o backlog em hipóteses testáveis e orientar o produto por outcomes eclesiásticos.
---

## 1. Princípios Lean no Ministério
Mesmo em ambientes tradicionais, o Lean UX reduz o risco de construir ferramentas que ninguém consegue usar.

### A. Construir-Medir-Aprender
- **Construir**: MVP focado no Formulário 1 (Divórcio/Recasamento).
- **Medir**: Tempo médio de preenchimento e taxa de erros em campos específicos.
- **Aprender**: Identificar quais seções do PDF original são mais confusas na versão digital.

### B. Hipóteses de Valor
- "Acreditamos que **reduzir o formulário em etapas** resultará em uma **taxa de conclusão 30% maior** em comparação ao formulário de página única."
- "Acreditamos que o **Language Switcher (PT/EN)** é essencial para ministros que servem em igrejas hispânicas/brasileiras nos EUA."

## 2. Validação Contínua
- **Testes de Guerrilha**: Peça a um pastor (não técnico) para preencher o formulário enquanto você observa.
- **Feedback Loop Admin**: O painel administrativo deve permitir que o Secretário marque campos que foram preenchidos incorretamente com frequência, sinalizando a necessidade de refatoração de UX.

## 3. Definição de MVP (Minimum Viable Product)
- **O que é**: Fluxo completo de Login -> Preenchimento -> Assinatura -> Geração de PDF -> Armazenamento no Supabase.
- **O que NÃO é**: Edição de perguntas via interface de admin (isso pode ser feito via código/Supabase inicialmente).
</skill>

### ux-sustainable-product
<skill>
# Sustainable Ministerial Product

---
name: ux-sustainable-product
description: Especialista em UX de alta performance e sustentabilidade digital para o COG Ministry Docs. Use para reduzir peso, energia e fricção sem degradar a experiência ministerial.
---

## 1. Performance como Sustentabilidade
Aplicações mais rápidas consomem menos energia e funcionam melhor em regiões com internet instável.

### A. Otimização de Assets
- **Signatures**: Garanta que as assinaturas capturadas via `react-signature-canvas` sejam otimizadas (PNG comprimido) antes de serem enviadas ao Supabase Storage.
- **Fonts**: Use fontes nativas ou otimizadas (Geist via Next.js Font) para evitar layouts shifts e downloads desnecessários.

### B. Client-side vs Server-side
- Gere o PDF no cliente utilizando `@react-pdf/renderer` para economizar processamento no servidor e largura de banda.

## 2. Redução de Fricção (Sustentabilidade Cognitiva)
- Cada campo desnecessário é um desperdício de tempo humano e energia computacional.
- **Ação**: Remova campos que não constam nos `sources/*.pdf` originais, a menos que sejam estritamente necessários para a funcionalidade digital (ex: e-mail de login).

## 3. Código Verde (Green Code)
- Utilize as capacidades do **Next.js App Router** para enviar o mínimo de JavaScript necessário para o navegador.
- Aproveite o **Turbopack** para builds rápidos e eficientes durante o desenvolvimento.
- **RLS no Supabase**: Consultas otimizadas evitam sobrecarga no banco de dados.

## 4. Longevidade do Produto
- Um software sustentável é um software que dura.
- **TypeScript**: Garante que o código seja manutenível por outros desenvolvedores da Igreja no futuro.
- **Documentação**: Manter `docs/*.md` atualizados é uma forma de sustentabilidade organizacional.
</skill>

### ui-ux-operations
<skill>
---
name: ui-ux-operations
description: Skill para design de fluxos de experiência do usuário. Use para otimizar processos de Importar -> Validar -> Emitir e criar dashboards intuitivos para secretários regionais.
---
# UI/UX Operations
- **Fluxo**: Reduzir fricção no processo de upload de planilhas.
- **Feedback**: Usar Toasts e Progress Bars em tempo real para operações de longa duração.
- **Erros**: Mensagens de erro devem ser amigáveis e sugerir a correção (ex: "CPF inválido na linha 45").
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

---

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
