# Playbook

## Objective
Implement secure, production-grade authentication and authorization with Supabase Auth.

## Rules of Session Management
- Always use @supabase/ssr for server-side session handling in Next.js App Router.
- Configure middleware to refresh session tokens on every request.
- Never store tokens in localStorage — use httpOnly cookies via Supabase SSR helpers.

## Rules of OAuth
- Validate state parameter on every OAuth callback to prevent CSRF.
- Use PKCE flow for all OAuth providers.
- Restrict redirect URLs to allowlisted domains in Supabase dashboard.

## Rules of RBAC
- Define roles as Postgres enums — never as plain strings in application code.
- Map every role to explicit RLS policies — no implicit access.
- Test each role in isolation: anon, authenticated, and each custom role.

## Rules of Token Handling
- Set access token expiry to 1 hour maximum.
- Enable refresh token rotation — invalidate old token on each refresh.
- Never expose service_role key to the client — server-side only.

## Rules of Account Recovery
- Rate limit password reset and magic link requests per email per hour.
- Set magic link expiry to 15 minutes maximum.
- Log all auth events (login, logout, password change) for audit trail.
