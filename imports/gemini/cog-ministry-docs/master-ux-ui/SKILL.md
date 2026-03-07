---
name: master-ux-ui
description: Super Mega Ultra Skill de UX e UI Design. Use para criar ou refatorar interfaces, componentes, formulários e layouts focando em usabilidade extrema, hierarquia visual impecável e clareza cognitiva baseada nos princípios de "Refactoring UI", "Laws of UX" e "Don't Make Me Think".
---
# 🧠 The Master UX/UI Principles

Esta skill carrega os princípios definitivos de UX e UI baseados em clássicos do design para garantir que o CMS Ministerial não seja apenas funcional, mas excepcional e intuitivo.

## 1. Don't Make Me Think (Steve Krug) - Clareza Extrema
- **Evite Carga Cognitiva**: O usuário deve entender como a tela funciona olhando para ela por 1 segundo, sem precisar ler manuais.
- **Convenções Importam**: Use ícones e padrões estabelecidos (ex: Lupa para buscar, X para fechar). Não tente ser "criativo" com a usabilidade básica.
- **Hierarquia Inegável**: O que é mais importante na tela deve ser a primeira coisa que os olhos encontram.
- **Call-to-Actions (CTAs) Claros**: Botões primários devem ter cor forte de preenchimento. Botões secundários devem ser "fantasmas" (ghost) ou apenas bordas.

## 2. Refactoring UI (Steve Schoger & Adam Wathan) - Polimento
- **Comece sem Cores (Wireframe Mental)**: Defina a hierarquia usando apenas tons de cinza, tamanhos e pesos de fonte. Só depois aplique a cor de destaque (Brand Color).
- **Brinque com Pesos, não apenas Tamanhos**: Em vez de aumentar a fonte de um título de 16px para 24px, tente mantê-lo em 16px mas mude o `font-weight` para 800 (ExtraBold) e deixe o subtítulo com `font-weight` 400 (Regular) e cinza.
- **Espaçamento é o Novo CSS**: Elementos não devem brigar por espaço. Use margins e paddings generosos (`gap-6`, `p-8` em Tailwind) para dar "respiro".
- **Evite Muitas Bordas**: Para separar conteúdos ou criar "Cards", prefira usar uma cor de fundo sutil (como um Slate-50) ou uma sombra suave (`shadow-sm`) em vez de desenhar linhas grossas ao redor de tudo.

## 3. Laws of UX (Jon Yablonski) - Psicologia
- **Lei de Jakob**: O usuário passa a maior parte do tempo em *outros* sites. Ele espera que o seu funcione da mesma forma. Siga os padrões web atuais.
- **Lei de Hick**: O tempo para atingir o alvo é função da distância e do tamanho do alvo. Faça botões grandes e fáceis de clicar (mínimo de `h-10` ou `h-12`).
- **Lei de Miller**: O tempo para tomar uma decisão aumenta com o número e a complexidade das escolhas. Limite opções na tela. Divida formulários gigantes em Steps (Passo a Passo).
- **Aesthetics-Usability Effect**: Usuários tendem a considerar que "o que é mais bonito funciona melhor". Um design limpo diminui a percepção de bugs.

## 4. UI/UX Operations (Práticas de Desenvolvimento)
- **Feedback em Tempo Real**: Sempre use "Loading States" (spinners/skeletons) após um clique. O sistema nunca deve parecer "congelado".
- **Erros Acionáveis**: Nunca mostre "Erro 500". Mostre "Ops, não conseguimos salvar este CPF porque ele já existe. Deseja editá-lo?".
- **Prevenção de Erros (The Design of Everyday Things)**: Em formulários críticos (como emissão de credenciais), desabilite o botão de "Salvar" até que os dados obrigatórios estejam preenchidos corretamente, em vez de deixar o usuário clicar e receber um erro depois.
- **Micro-interações**: Adicione `transition-all duration-200` em botões e links. O `hover:` e `focus:` devem dar retorno visual imediato.

## 🛠️ Diretriz de Execução (AI Prompting)
Sempre que for criar ou refatorar um componente React/Next.js ou arquivo de Layout (como o verso da credencial), aplique automaticamente **todos** os princípios acima. Use Tailwind CSS ou Vanilla CSS priorizando a harmonia descrita nesta Skill.
