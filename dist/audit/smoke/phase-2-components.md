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
