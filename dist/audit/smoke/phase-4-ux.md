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
