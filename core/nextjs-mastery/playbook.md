# Playbook

## Objective
Design Next.js 15 applications with minimal JS on the client and maximum operational predictability.

## Rules
- Server Components by standard. Client apenas with interatividade real.
- Explicit caching and invalidation by data type — never implicit.
- Error/loading boundaries at the correct level of route.
- Push the 'use client' boundary as far down the tree as possible.
- Parallel data fetching with Promise.all in Server Components.
- React cache() for deduplication of requests in the same render.
- Tag-based revalidation with revalidateTag() in Server Actions.
- dynamic imports for heavy non-critical components.
- next/image for all images — explicit size, format, priority.
