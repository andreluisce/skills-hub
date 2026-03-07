# Playbook

## Source
Rápido e Devagar — Daniel Kahneman

## Objetivo
Tomar decisões técnicas e de produto com Sistema 2 ativo, evitando vieses que degradam qualidade.

## Sistema 1 vs Sistema 2
- Sistema 1: automático, rápido, heurístico — opera por associação.
- Sistema 2: deliberado, lento, lógico — requer esforço consciente.
- Decisões arquiteturais e code reviews críticos exigem Sistema 2.

## Vieses a Vigiar
- Anchoring: não estime com âncoras externas — comece do zero.
- Confirmation Bias: busque ativamente evidências contra a hipótese favorita.
- Planning Fallacy: use referência externa para estimativas. Adicione buffer explícito.
- Sunk Cost: avalie apenas custo/benefício futuro — ignore o passado na decisão.
- Halo Effect: avalie a ideia, não a fonte. PRs revisados sem saber o autor quando possível.

## Aplicado a UX
- Usuários operam em Sistema 1 — design deve ser óbvio sem esforço.
- Reserve Sistema 2 para decisões importantes (ações irreversíveis).
- Atrito positivo onde Sistema 2 DEVE ser acionado.

## Pre-Mortem
"Imagine que é 6 meses após e esta decisão foi um desastre. O que deu errado?"
Liste os motivos. Avalie se são mitigáveis.
