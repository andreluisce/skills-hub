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
description: Aplicar padrões avançados de componentes React 19+ para reduzir acoplamento, melhorar composição e eliminar anti-patterns em interfaces escaláveis com shadcn/ui e arquitetura orientada a domínio.
---
# React 19 Component Patterns

## Stack
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Auditar componentes críticos e identificar anti-patterns recorrentes.
2. Separar apresentação, orquestração e regras de domínio.
3. Aplicar composição com contratos explícitos de props e estados.
4. Consolidar padrões de acessibilidade e feedback de interação.
5. Definir plano de refatoração incremental com critérios de aceite.

## Output esperado
1. Diagnóstico de anti-patterns por componente.
2. Padrão alvo de composição e contratos.
3. Estratégia de refatoração por lotes.
4. Critérios de acessibilidade e consistência.

# Playbook

## Objetivo
Padronizar componentes React 19 para previsibilidade de manutenção e evolução.

## Regras
- Componentes visuais sem efeitos colaterais.
- Hooks de orquestração isolados por feature.
- Contratos de props pequenos e coesos.
- Reuso via composição, não herança implícita.
</skill>

### shadcn-design-system-ops
<skill>
---
name: shadcn-design-system-ops
description: Operar e evoluir design system com shadcn/ui e Tailwind v4, padronizando tokens, variantes, acessibilidade e governança de componentes para múltiplos apps em monorepo Next.js 15+ e React 19+.
---
# shadcn Design System Operations

## Stack
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Definir tokens semânticos globais e variações por tema/contexto.
2. Estabelecer padrões de componentes base e variantes com cva.
3. Criar política de contribuição e revisão para novos componentes.
4. Validar acessibilidade, foco visível e contraste em fluxos críticos.
5. Publicar changelog de DS e plano de adoção por app.

## Output esperado
1. Catálogo de tokens e variantes aprovadas.
2. Guia de contribuição de componentes.
3. Checklist de acessibilidade operacional.
4. Estratégia de rollout do design system.

# Playbook

## Objetivo
Escalar UI consistente entre apps sem travar evolução de produto.

## Regras
- Token semântico antes de cor hardcoded.
- `cva` para variantes; `cn()` para composição segura.
- Componente novo exige contrato, estado e critérios de acessibilidade.
- Evitar duplicação de componente entre pacotes.
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
description: Definir governança de estado de servidor com TanStack Query em React 19+, incluindo query keys, staleTime, invalidação, optimistic updates e políticas de erro/retry para apps Next.js 15+ em monorepo.
---
# TanStack Query Governance

## Stack
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Classificar domínios de dados por volatilidade e criticidade.
2. Padronizar convenção de query keys e ownership por pacote.
3. Definir staleTime, gcTime e regras de invalidação por evento.
4. Especificar optimistic updates, rollback e tratamento de erro.
5. Monitorar taxa de refetch, latência percebida e falhas.

## Output esperado
1. Matriz de domínios de dados e política de cache.
2. Convenção oficial de query keys.
3. Regras de invalidação e update otimista.
4. Indicadores de qualidade de server state.

# Playbook

## Objetivo
Tornar o estado de servidor previsível, auditável e eficiente.

## Regras
- Toda query key deve ser determinística e documentada.
- Invalidação baseada em eventos de negócio, não em conveniência.
- Retry e backoff diferentes por tipo de erro.
- Estado de UI não deve vazar para cache de servidor.
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
