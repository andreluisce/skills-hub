# Playbook

## Objective
Operate the Supabase backend with total security, performance and type safety.

## Rules of Type Safety
- Sempre Tables<'table_name'>, Enums<'enum_name'> — nunca tipos manuais.
- Regenerate after any migration: pnpm types:generate.

## Rules of Queries
- select() with explicit columns — never select('*') in production.
- Mandatory pagination in listings (.range(from, to)).
- Tratar .errorr antes of usar .data — sempre.
- Queries server-side with createClient of @supabase/ssr.
- Service role key apenas in server-side/Edge Functions — nunca no cliente.

## Rules of RLS
- Explicit policies by operation (SELECT, INSERT, UPDATE, DELETE).
- Test with authenticated and anonymous user before deploying.

## Rules of Performance
- Indexes for columns used in WHERE, JOIN, ORDER BY frequently.
- EXPLAIN ANALYZE for diagnosticar queries lentas.
- Views materializadas for agregactions pesadas e frequentes.

## Rules of Storage
- Buckets with explicit access policy (public vs private).
- Signed URLs with expiration date for private files.
- Validate type and size before uploading.
