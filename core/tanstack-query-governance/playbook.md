# Playbook

## Objective
Make server status predictable, auditable and efficient.

## Rules
- Every query key must be deterministic and documented.
- Invalidation based on business events, not on convenience.
- Retry e backoff diferentes by tipo of error.
- Estado of UI not deve vazar for cache of servidor.
