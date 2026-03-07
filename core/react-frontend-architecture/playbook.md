# Playbook

## Standard stack
- Next.js 15+ App Router with Server Components by standard.
- React 19+ for UI and Client boundaries when necessary.
- TanStack Query for server state and explicit invalidation.
- shadcn/ui + Tailwind v4 with semantic tokens and cva/cn.
- Monorepo with apps and packages of domain/design system/shared.

## Rules essenciais
- Proibir import profundo entre pacotes.
- Expose only public surface by package.
- Separate ui/application/domain/infra into critical features.
- Encapsular SDK externo in adapters.
