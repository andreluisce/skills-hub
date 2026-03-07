# Playbook

## Objetivo
Eliminar fricção em fluxos operacionais e garantir que o sistema nunca pareça congelado.

## Regras
- Loading state imediato após qualquer ação do usuário.
- Progress indicator para operações acima de 1 segundo.
- Erros identificam o campo exato, explicam o problema e sugerem ação corretiva.
- Estado vazio tem instrução clara sobre o que fazer a seguir.
- Ações frequentes acessíveis com 1 clique a partir do dashboard.
- Validação inline em formulários — não apenas no submit.
- Preservar contexto entre etapas — sem perda de dados em navegação.

## Feedback Patterns
- Toast: confirmação de sucesso e erros recuperáveis.
- Inline error: campos de formulário inválidos.
- Progress bar: uploads e operações longas.
- Skeleton: carregamento de listas e cards.
- Spinner: ações pontuais (botão submit, delete).
