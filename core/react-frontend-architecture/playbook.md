# Playbook

## Stack padrão
- Next.js 15+ App Router com Server Components por padrão.
- React 19+ para UI e boundaries Client quando necessário.
- TanStack Query para estado de servidor e invalidação explícita.
- shadcn/ui + Tailwind v4 com tokens semânticos e cva/cn.
- Monorepo com apps e packages de domínio/design system/shared.

## Regras essenciais
- Proibir import profundo entre pacotes.
- Expor somente surface pública por package.
- Separar ui/application/domain/infra em features críticas.
- Encapsular SDK externo em adapters.
