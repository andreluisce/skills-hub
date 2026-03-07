# Playbook

## Objetivo
Escalar UI dark mode consistente sem regressão visual ou violação de acessibilidade.

## Regras
- Sem hardcoded hex ou rgb em componentes — sempre via CSS variable ou token.
- Contraste mínimo 4.5:1 para texto normal, 3:1 para texto grande (WCAG AA).
- Foco visível obrigatório — nunca remova outline sem substituto acessível.
- cva() para variantes adicionais tipadas.
- cn() para composição segura de classes condicionais.
- Nunca modifique arquivos shadcn gerados diretamente — estenda via className.

## Token Categories (globals.css)
- --background, --foreground
- --card, --card-foreground
- --primary, --primary-foreground
- --muted, --muted-foreground
- --border, --input, --ring

## Dark Mode Checklist
1. Texto legível em todos os fundos.
2. Bordas visíveis mas não dominantes.
3. Sombras sutis com opacidade reduzida.
4. Ícones com contraste adequado.
