# Playbook

## Objective
Ensure technical and architectural integrity of the project over time.

## Mandatory Rules
- Dark Theme Only: todos os components usam tema escuro.
- Zero Hardcoded Text: all visible labels and data come from the database or translation files.
- Supabase Types: usar sempre Tables<'...'> gerados — nunca criar tipos manuais for entidades.
- API-Client: all fetch logic in shared packages, never in apps directly.
- pnpm exclusivamente — nunca npm ou yarn.
- Commits: Atomic Semantic Commits (feat, fix, chore, refactor, docs).
