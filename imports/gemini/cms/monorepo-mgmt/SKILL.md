---
name: monorepo-mgmt
description: Skill de orquestração do monorepo CMS Ministerial. Use para gerenciar a relação entre apps/cms e pacotes como api-client, ui e monitoring via turbo/pnpm.
---
# Monorepo Management (Internal Structure)

## Estrutura de Pacotes
- `apps/cms`: Frontend principal (Next.js 14).
- `packages/api-client`: Única fonte de verdade para chamadas à API e tipos do Supabase.
- `packages/ui`: Componentes Shadcn customizados para Dark Mode.
- `packages/monitoring`: Lógica de Health Check e logs de erro.

## Fluxo de Desenvolvimento
- **Instalação**: Usar exclusivamente `pnpm install`.
- **Scripts**: Usar `pnpm dev` na raiz para iniciar o workspace via Turbo.
- **Novas Funcionalidades**: Lógica de dados deve SEMPRE começar pelo `api-client`.
