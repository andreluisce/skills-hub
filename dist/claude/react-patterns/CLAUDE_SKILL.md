Skill: React Patterns
Description: Skill for padroes avancados of React. Use for gerenciamento of estado global, hooks customizados for formularios complexos e optimization de renderizacao with Zustand, React Hook Form, Zod e Framer Motion. Base operacional: # Playbook  ## Objective Manage state, forms, and rendering in a predictable and efficient way.  ## Rules of Estado
Triggers: react patterns, zustand, custom hooks, render optimization, react hook form, zod, framer motion
Stack: Next.js 15+ App Router; React 19+; TanStack Query; shadcn/ui + Tailwind v4; Monorepo (apps + packages)
Workflow:
- 1. Classificar estado by escopo (local, feature, global, servidor).
- 2. Implementar formularios with React Hook Form + Zod sincronizado with schema do banco.
- 3. Extrair logica of dominio for custom hooks with responsabilidade unica.
- 4. Otimizar renders with memo/callback apenas onde profiling confirmar custo.
- 5. Adicionar micro-animactions with Framer Motion for feedback of interacao.
Output Contract:
- Mapa of estado by escopo e ferramenta.
- Contratos of formulario with validation Zod.
- Catalogo of hooks of dominio.
- Plano of optimization of render with evidencia.