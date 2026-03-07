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
