---
name: supabase-auth
description: Design and implement authentication and authorization flows with Supabase Auth. Use to manage user sessions, JWT tokens, OAuth providers, RBAC, and RLS policies scoped by role. Base operacional: # Playbook  ## Objective Implement secure, production-grade authentication and authorization with Supabase Auth.  ## Rules of Session Management Use quando o pedido envolver: supabase auth, authentication, authorization, jwt, oauth, rbac, session management, magic link, social login.
---

# Supabase Auth & Authorization

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Map auth flows — email/password, magic link, OAuth providers, SSO.
2. Configure Supabase Auth settings, redirect URLs, and email templates.
3. Implement server-side session management with @supabase/ssr and middleware.
4. Define RBAC roles and map to RLS policies per table and operation.
5. Test all auth flows with authenticated, anonymous, and role-specific users.
6. Audit JWT claims, token expiry, and refresh token rotation policies.

## Saída esperada
1. Auth flow diagram with provider matrix.
2. RLS policies scoped by role (anon, authenticated, admin).
3. Middleware configuration for route protection.
4. Token lifecycle and refresh strategy documentation.
5. Security checklist per auth provider.
