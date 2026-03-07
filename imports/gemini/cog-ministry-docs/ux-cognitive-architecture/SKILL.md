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
