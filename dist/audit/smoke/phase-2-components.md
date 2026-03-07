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
