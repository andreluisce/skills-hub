Skill: Essentialism & Antifragile Applied to Software
Description: Aplicar principios of Essentialism (McKeown), Antifragil (Taleb) e 80/20 (Koch) for tomar decisoes of product e architecture. Use for prioritize funcionalidades, eliminar escopo desnecessario e construir sistemas resilientes. Base operacional: # Playbook  ## Sources - Essencialismo — Greg McKeown - Antifragil — Nassim Nicholas Taleb - A Revolution 80/20 — Richard Koch
Triggers: essentialism, antifragile, taleb, mckeown, prioritization, scope, resilience, 80/20, less but better, optionality
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Identify the 20% of features that generate 80% of user value.
- 2. Eliminar ou adiar features que not sao "sim obvio".
- 3. Assess system fragility — points of single failure and tight coupling.
- 4. Aplicar barbell strategy — 80% fundactions solidas, 20% experimentacao.
- 5. Define optionality — which decisions can be easily reversed.
Output Contract:
- Mapa of features by valor/esforco.
- Lista of itens eliminados e justificativa.
- Diagnostico of fragilidade architecturel.
- Plano of resiliencia e rollback.