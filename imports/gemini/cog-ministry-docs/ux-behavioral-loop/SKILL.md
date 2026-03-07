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
