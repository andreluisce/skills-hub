---
name: supabase-edge-functions
description: Design, implement, and deploy Supabase Edge Functions on Deno runtime. Use to handle webhooks, background jobs, third-party integrations, and server-side logic that requires secrets or elevated permissions. Base operacional: # Playbook  ## Objective Build reliable, secure Edge Functions on Supabase Deno runtime for server-side integrations.  ## Rules of Function Design Use quando o pedido envolver: edge functions, supabase functions, deno, webhooks, background jobs, server-side integration, supabase invoke.
---

# Supabase Edge Functions

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Identify use cases — webhook receiver, scheduled job, third-party API proxy, or auth hook.
2. Scaffold function with Deno runtime, typed request/response, and error handling.
3. Manage secrets via Supabase Vault — never hardcode credentials.
4. Implement idempotency and retry safety for webhook handlers.
5. Write local tests with Deno test runner and mock Supabase client.
6. Deploy with supabase functions deploy and verify logs in dashboard.

## Saída esperada
1. Function implementation with typed request/response contracts.
2. Secrets inventory mapped to Vault keys.
3. Idempotency strategy per function.
4. Deployment checklist with smoke test commands.
