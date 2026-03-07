# Playbook

## Objetivo
Gerenciar estado, formulários e renderização de forma previsível e eficiente.

## Regras de Estado
- Local: useState/useReducer para estado de componente isolado.
- Global de UI: Zustand para estados compartilhados entre features.
- Servidor: TanStack Query exclusivamente — nunca misturar com estado de UI.

## Regras de Formulários
- React Hook Form + Zod em todos os formulários.
- Validação inline, não apenas no submit.
- Submit desabilitado até dados obrigatórios estarem corretos.
- Erro específico por campo — nunca mensagem genérica.

## Regras de Custom Hooks
- Um hook por responsabilidade de domínio.
- Prefixo use obrigatório, retorno tipado explicitamente.
- Lógica de negócio fora de componentes.

## Regras de Performance
- memo/useMemo/useCallback apenas com evidência de custo real.
- Listas longas: TanStack Virtual.
- Animações: Framer Motion para transições de estado, Tailwind para hover/focus simples.
