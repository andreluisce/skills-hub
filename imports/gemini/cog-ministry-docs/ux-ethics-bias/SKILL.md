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
