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
