# Playbook

## Objetivo
Operar o backend Supabase com segurança, performance e type safety total.

## Regras de Type Safety
- Sempre Tables<'table_name'>, Enums<'enum_name'> — nunca tipos manuais.
- Regenerar após qualquer migração: pnpm types:generate.

## Regras de Queries
- select() com colunas explícitas — nunca select('*') em produção.
- Paginação obrigatória em listagens (.range(from, to)).
- Tratar .error antes de usar .data — sempre.
- Queries server-side com createClient de @supabase/ssr.
- Service role key apenas em server-side/Edge Functions — nunca no cliente.

## Regras de RLS
- Políticas explícitas por operação (SELECT, INSERT, UPDATE, DELETE).
- Testar com usuário autenticado e anônimo antes de deploy.

## Regras de Performance
- Índices para colunas usadas em WHERE, JOIN, ORDER BY frequentes.
- EXPLAIN ANALYZE para diagnosticar queries lentas.
- Views materializadas para agregações pesadas e frequentes.

## Regras de Storage
- Buckets com política de acesso explícita (public vs private).
- Signed URLs com prazo de expiração para arquivos privados.
- Validar tipo e tamanho antes do upload.
