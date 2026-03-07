# Playbook

## Objective
Build reliable, secure Edge Functions on Supabase Deno runtime for server-side integrations.

## Rules of Function Design
- One function per responsibility — no multi-purpose functions.
- Always type request body and response — never use `any`.
- Return consistent error format: `{ error: string, code: string }`.

## Rules of Secrets
- All secrets go through Supabase Vault — never hardcode in function code.
- Use `Deno.env.get('SECRET_NAME')` and validate presence at startup.
- Rotate secrets without downtime by supporting old + new key during transition.

## Rules of Idempotency
- Webhook handlers must be idempotent — use event ID deduplication.
- Store processed event IDs in a `processed_events` table with TTL.
- Return 200 for duplicate events — never reprocess.

## Rules of Error Handling
- Catch all errors — never let unhandled exceptions crash the function silently.
- Log structured errors with request ID for traceability.
- Use exponential backoff for outgoing HTTP retries — max 3 attempts.

## Rules of Deployment
- Test locally with `supabase functions serve` before deploying.
- Deploy to staging first — verify with smoke test before production.
- Monitor invocation logs for first 30 minutes after each deploy.
