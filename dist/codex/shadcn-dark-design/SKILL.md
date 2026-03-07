---
name: shadcn-dark-design
description: Skill for criacao of interfaces usando shadcn/ui focused on Tema Escuro. Use for customizar components, gerenciar variaveis CSS e garantir contraste acessivel in dark mode. Base operacional: # Playbook  ## Objective Scale consistent dark mode UI without visual regression or violation of accessibility.  ## Rules Use quando o pedido envolver: shadcn dark, dark mode, dark theme, css variables, globals.css, accessible contrast, dark ui.
---

# Shadcn Dark Design

## Stack alvo
- Next.js 15+ App Router
- React 19+
- TanStack Query
- shadcn/ui + Tailwind v4
- Monorepo (apps + packages)

## Workflow
1. Set all semantic tokens in globals.css under :root and .dark.
2. Auditar components by uso of cores hardcoded fora of tokens.
3. Verificar contraste minimo WCAG AA in texto e elementos interativos.
4. Garantir foco visivel in todos os elementos focaveis in dark mode.
5. Testar components in Chrome, Firefox e Safari in dark mode.

## Saída esperada
1. Catalogo of tokens semanticos definidos.
2. Lista of violactions of hardcoded color.
3. Relatorio of contraste by component critico.
4. Checklist of accessibility in dark mode.
