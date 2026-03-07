Skill: Supabase Expert
Description: Skill for operating the project's Supabase backend. Use to manage tables, RLS, migrations, generated types, storage and flow of data with security and performance. Base operacional: # Playbook  ## Objective Operate the Supabase backend with total security, performance and type safety.  ## Rules of Type Safety
Triggers: supabase, rls, row level security, migrations, supabase types, postgrest, supabase storage, supabase auth
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Usar sempre tipos gerados Tables<'...'> e regenerar apos migractions.
- 2. Escrever queries with colunas explicitas e paginacao obrigatoria in listagens.
- 3. Define and test RLS policies by operation (SELECT, INSERT, UPDATE, DELETE).
- 4. Criar indices for colunas of WHERE e JOIN frequentes e diagnosticar with EXPLAIN.
- 5. Gerenciar storage with buckets of acesso explicito e signed URLs for privados.
Output Contract:
- Esquema of tabelas with indices documentados.
- Politicas RLS by tabela e operacao.
- Plano of migractions with rollback.
- Checklist of performance of queries criticas.