# Playbook

## Objetivo
Garantir que o monorepo escale sem erosão de boundaries e sem duplicação de lógica.

## Regras
- Instalar exclusivamente com pnpm.
- Nunca importar diretamente de apps vizinhos — sempre via pacote compartilhado.
- Cada pacote expõe apenas sua API pública via index.ts.
- Lógica de dados inicia em packages/api-client, nunca em apps/.
- Mudanças cross-package exigem revisão arquitetural.
- Comandos globais via turbo — nunca executar build/test em cada pacote manualmente.
