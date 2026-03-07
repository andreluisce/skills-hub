---
name: cms-dev-standards
description: Habilidade para manter padrões técnicos do CMS Ministerial. Use para garantir Tema Escuro, evitar textos hardcoded, gerenciar tipos do Supabase e operar o monorepo (pnpm/turbo/scripts de deploy).
---

# CMS Development Standards

Habilidade focada em manter a integridade técnica e arquitetural do CMS Ministerial.

## Regras de Ouro (Mandatórias)

### 1. UI & Estética
- **Dark Theme Only**: Todos os componentes e telas DEVEM usar tema escuro. Não implemente alternativas de tema claro.
- **Vanilla CSS over Tailwind**: Prefira Vanilla CSS para componentes core para garantir precisão cirúrgica (especialmente em componentes de impressão).

### 2. Gestão de Dados & I18n
- **Zero Hardcoded Text**: NENHUM texto visível ao usuário deve ser hardcoded. Todos os dados e labels devem vir do banco de dados (Supabase) ou arquivos de tradução.
- **Supabase Types**: Use SEMPRE os tipos gerados automaticamente (`Tables<'...'>`). Nunca crie tipos manuais para entidades do banco.

### 3. Arquitetura Monorepo
- **API-Client**: Toda lógica de fetching para APIs externas deve residir no pacote `packages/api-client`. Não duplique lógica em `apps/cms`.
- **pnpm & Turbo**: Use exclusivamente `pnpm`. Comandos globais devem ser executados via `turbo`.

## Workflows de Operação

### Deploy e Manutenção
- Execute `scripts/deploy.sh` para deploys em produção.
- Para health checks, use `packages/monitoring`.

### Commits
- Use **Atomic Semantic Commits** (ex: `feat(ui): add printing overlay`, `fix(auth): redirect loop`).

## Referências Úteis
- Esquema do Banco: `schema/public_schema.sql`
- Configuração Global: `.gemini/GEMINI.md`
