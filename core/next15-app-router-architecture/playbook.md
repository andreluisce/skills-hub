# Playbook

## Objective
Design App Router with minimal client JS and maximum operational predictability.

## Rules
- Server Components by standard; Client apenas when houver interatividade real.
- Explicit caching and invalidation by data type and criticality.
- Error/loading boundaries set at the correct level of route.
- Avoid logic of domain in components of page.
