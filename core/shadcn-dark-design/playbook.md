# Playbook

## Objective
Scale consistent dark mode UI without visual regression or violation of accessibility.

## Rules
- Sem hardcoded hex ou rgb in components — sempre via CSS variable ou token.
- Minimum contrast 4.5:1 for normal text, 3:1 for large text (WCAG AA).
- Visible focus required — never remove outline without accessible replacement.
- cva() for variantes adicionais tipadas.
- cn() for safe composition of conditional classes.
- Nunca modifique arquivos shadcn gerados diretamente — estenda via className.

## Token Categories (globals.css)
- --background, --foreground
- --card, --card-foreground
- --primary, --primary-foreground
- --muted, --muted-foreground
- --border, --input, --ring

## Dark Mode Checklist
1. Readable text on all backgrounds.
2. Edges visible but not dominant.
3. Sombras sutis with opacidade reduzida.
4. Icons with adequate contrast.
