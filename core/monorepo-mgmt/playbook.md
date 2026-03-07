# Playbook

## Objective
Ensure that the monorepo scales without erosion of boundaries and without duplication of logic.

## Rules
- Instalar exclusivamente with pnpm.
- Nunca importar diretamente of apps vizinhos — sempre via pacote compartilhado.
- Each package only exposes its public API via index.ts.
- Logic of data starts in packages/api-client, never in apps/.
- Cross-package changes require architectural review.
- Comandos globais via turbo — nunca execute build/test in cada pacote manualmente.
