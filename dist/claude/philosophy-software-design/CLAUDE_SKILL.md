Skill: A Philosophy of Software Design
Description: Aplicar principios of design of software of John Ousterhout. Use for reduzir complexidade, criar modulos profundos, escrever codigo obvio e tomar decisoes of design defensaveis. Base operacional: # Playbook  ## Source A Philosophy of Software Design — John Ousterhout  ## Objective
Triggers: software design, complexity, deep modules, shallow modules, obvious code, tactical programming, strategic programming, ousterhout
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Identificar sintomas of complexidade (change amplification, cognitive load, unknown unknowns).
- 2. Classificar modulos como profundos ou rasos e eliminar pass-through desnecessario.
- 3. Verificar information hiding — o que e exposto not deveria ser?
- 4. Auditar consistency of convencoes in todo o codebase.
- 5. Refatorar for modulos mais profundos with interfaces mais simples.
Output Contract:
- Diagnostico of complexidade by modulo.
- Lista of modulos rasos for aprofundar.
- Plano of information hiding by servico.
- Checklist of consistency of convencoes.