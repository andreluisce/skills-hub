Skill: Refactoring
Description: Aplicar tecnicas of refatoracao of Martin Fowler. Use for melhorar estrutura interna of codigo without alterar comportamento externo, identificar code smells e apply transformactions catalogadas. Base operacional: # Playbook  ## Source Refactoring — Martin Fowler  ## Objective
Triggers: refactoring, refactor, code smell, extract method, extract component, fowler, technical debt, restructure
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Garantir cobertura of testes do comportamento atual antes of qualquer mudanca.
- 2. Identificar um code smell especifico e catalogado.
- 3. Aplicar uma refatoracao by vez e rodar os testes.
- 4. Commitar apos cada refatoracao bem-sucedida.
- 5. Repetir ate que o modulo esteja no estado alvo.
Output Contract:
- Lista of code smells identificados by arquivo.
- Refatoractions aplicadas with justificativa.
- Estado antes/depois by modulo.
- Testes adicionados for cobrir comportamento.