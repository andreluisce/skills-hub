Skill: Shadcn Dark Design
Description: Skill for criacao of interfaces usando shadcn/ui focused on Tema Escuro. Use for customizar components, gerenciar variaveis CSS e garantir contraste acessivel in dark mode. Base operacional: # Playbook  ## Objective Scale consistent dark mode UI without visual regression or violation of accessibility.  ## Rules
Triggers: shadcn dark, dark mode, dark theme, css variables, globals.css, accessible contrast, dark ui
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Set all semantic tokens in globals.css under :root and .dark.
- 2. Auditar components by uso of cores hardcoded fora of tokens.
- 3. Verificar contraste minimo WCAG AA in texto e elementos interativos.
- 4. Garantir foco visivel in todos os elementos focaveis in dark mode.
- 5. Testar components in Chrome, Firefox e Safari in dark mode.
Output Contract:
- Catalogo of tokens semanticos definidos.
- Lista of violactions of hardcoded color.
- Relatorio of contraste by component critico.
- Checklist of accessibility in dark mode.