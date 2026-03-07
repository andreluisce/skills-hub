# Playbook

## Objetivo
Garantir integridade técnica e arquitetural do projeto ao longo do tempo.

## Regras Mandatórias
- Dark Theme Only: todos os componentes usam tema escuro.
- Zero Hardcoded Text: todos os labels e dados visíveis vêm do banco ou arquivos de tradução.
- Supabase Types: usar sempre Tables<'...'> gerados — nunca criar tipos manuais para entidades.
- API-Client: toda lógica de fetch em pacotes compartilhados, nunca em apps diretamente.
- pnpm exclusivamente — nunca npm ou yarn.
- Commits: Atomic Semantic Commits (feat, fix, chore, refactor, docs).
