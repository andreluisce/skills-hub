# Convenções Personalizadas - LLM Wiki para Estudar Livros

> Adaptação da skill `llm-wiki` para o sistema de estudo de livros

---

## 🎯 Objetivo

Manter uma wiki persistente em Obsidian para estudar livros de forma estruturada e consistente.

---

## 📂 Estrutura do Vault

```
OBSIDIAN_VAULT_DIR = ~/obsidian-vaults/personal

personal/
├── index.md                          ← Porta de entrada (lista livros)
└── books/
    └── [nome-livro]/
        ├── index.md                  ← Metadados, capítulos, insights do livro
        └── wiki/
            ├── concepts/             ← Conceitos principais
            │   ├── cap-1.md
            │   ├── cap-2.md
            │   └── ...
            ├── sources/              ← Resumo da fonte
            │   └── [livro]-summary.md
            └── overviews/            ← Sínteses e visões gerais
                └── fundamentos.md
```

---

## 📋 Convenções por Livro

### Metadados (index.md do livro)

```markdown
# [Título do Livro] - [Autor] ([Ano])

**Autor:** [Nome]
**Editora:** [Nome]
**Ano:** [YYYY]
**Idioma:** Português Brasileiro
**Arquivo Original:** 📁 `[Categoria]/[nome-livro].pdf` (caminho relativo, não absoluto!)

---

### ⚠️ IMPORTANTE: Referências a PDFs

**NUNCA use caminho absoluto:**
```markdown
❌ **PDF Original:** `/Users/andreluisce/Documents/Livros/...pdf`
```

**USE caminho relativo ou apenas nome:**
```markdown
✅ **Arquivo Original:** 📁 `Negocios-Lideranca/smart-notes-ahrens.pdf`
✅ **Arquivo Original:** 📁 `Programacao/AI-Engineering-Huyen.pdf`
```

**Por quê?** 
- Caminho absoluto cria nó indesejado no GraphView
- Nó fica com texto `/var/folders/...` (feio, sem significado)
- Caminho relativo não gera nós extras, apenas referência textual

---

## 📖 Capítulos

1. [[wiki/concepts/cap-1|Cap 1: Título]]
2. [[wiki/concepts/cap-2|Cap 2: Título]]
...

---

## 💡 Insights-Chave

- Insight 1
- Insight 2
...

---

## 📊 Histórico de Análise

**Data:** YYYY-MM-DD
**Cobertura:** X%
**Status:** ✅ Completo / 🔄 Em andamento
```

### Um Único Arquivo com Nome Significativo

**Padrão:** Um arquivo por livro com nome significativo (não `index.md`):

```
books/smart-notes-ahrens/
├── smart-notes-ahrens.md   ← HUB COMPLETO (nome aparece direto no graph!)
└── wiki/
    ├── concepts/           ← Capítulos
    ├── sources/            ← Resumo
    └── overviews/          ← Sínteses

personal/
├── personal-vault.md       ← Portal principal (nome significativo)
└── books/
```

**Nomenclatura:**
- Use o **slug do livro** (mesmo nome da pasta) como nome do arquivo
- Exemplo: `books/smart-notes-ahrens/smart-notes-ahrens.md`
- Raiz: `personal/personal-vault.md` ou similar

**Conteúdo do arquivo:**
1. Título + Metadados (autor, editora, ano, arquivo, status)
2. Essência (resumo rápido 2-3 parágrafos)
3. Informações (público, nível, aplicação)
4. Insights-Chave (6-8 pontos principais)
5. Estrutura de Conteúdo (princípios/pilares, passos/técnicas, capítulos)
6. Conceitos Centrais (3-5 conceitos principais)
7. Histórico de Análise (data, cobertura, notas criadas)
8. Navegação (links para sínteses, fontes, volta ao vault)

**Exemplo:**
```markdown
# How to Take Smart Notes - Sönke Ahrens (2017)

**Autor:** ...
**Status:** ✅ Análise Completa

---

## 🎯 Essência
...

## 💡 Insights-Chave
1. ...
2. ...

## 🏗️ Os 4 Princípios
- [[wiki/concepts/cap-5|Writing...]]
- [[wiki/concepts/cap-6|Simplicity...]]

...
```

**Vantagens:**
- ✅ Nome significativo aparece direto no GraphView
- ✅ ZERO redundância (um arquivo por livro)
- ✅ Completo (tudo que você precisa em um lugar)
- ✅ Sem aliases complexos (semântica clara)
- ✅ Simples manter (uma fonte de verdade)

---

### Estrutura de Capítulos (wiki/concepts/)

```markdown
# Capítulo N: Título

## Visão Geral

Resumo do capítulo em 1-2 parágrafos

## Temas Principais

### Tema 1
Explicação...

### Tema 2
Explicação...

## Conceitos-Chave

- Conceito 1
- Conceito 2

## Quando Aplicar

✅ Use para:
- Caso 1
- Caso 2

❌ Não use para:
- Caso 3

## Relacionado

- [[cap-anterior]]
- [[cap-proximo]]
- [[conceito-relacionado]]

---

**Fonte:** [[Título do Livro]]
```

### Resumo da Fonte (wiki/sources/)

```markdown
# Fonte: [Título do Livro]

**Autor:** [Nome]
**Data de Ingestão:** YYYY-MM-DD
**Arquivo:** [Caminho do PDF]

## Resumo

Um parágrafo sobre o livro.

## Conceitos Principais

- [[Conceito 1]]
- [[Conceito 2]]
...

## Público-Alvo

- Perfil 1
- Perfil 2

## Por Que Isso É Importante

Explicação...

---

**Status:** Análise Completa / Em andamento
```

### Sínteses (wiki/overviews/)

```markdown
# [Tema] - Síntese

Visão geral conectando múltiplos capítulos.

## Arquitetura

Diagrama ou descrição visual se aplicável.

## Pilares Principais

### Pilar 1
Explicação...

### Pilar 2
Explicação...

## Quando Usar

Trade-offs e decisões.

---

**Relacionado:**
- [[cap-1]]
- [[cap-2]]
```

---

## 🔄 Operações

### /ingest <livro> — Ingerir novo livro

**Entrada:** Caminho do PDF ou arquivo  
**Saída:** Livro completamente análisado no vault

**Passos:**
1. Extrair estrutura do livro (capítulos, seções)
2. Criar `books/[nome-livro]/index.md` com metadados
3. Para cada capítulo: criar arquivo em `wiki/concepts/cap-N.md`
4. Criar resumo em `wiki/sources/[livro]-summary.md`
5. Criar sínteses em `wiki/overviews/`
6. Atualizar `personal/index.md` com link ao livro

### /query <pergunta> — Buscar no vault

**Entrada:** Pergunta sobre conteúdo estudado  
**Saída:** Resposta com citações e links

**Passos:**
1. Ler `personal/index.md` para encontrar livro relevante
2. Ler `books/[livro]/index.md` para encontrar capítulo
3. Ler `wiki/concepts/cap-N.md` relevantes
4. Responder com citações: `([[cap-1|Capítulo 1]])`
5. Oferecer criar nota de síntese se necessário

### /expandir <capítulo> — Expandir análise

**Entrada:** Número do capítulo ou tema  
**Saída:** Análise mais profunda

**Passos:**
1. Ler PDF original e capítulo específico
2. Expandir `wiki/concepts/cap-N.md` com mais detalhes
3. Adicionar exemplos práticos
4. Adicionar casos de uso
5. Atualizar relacionamentos com outros capítulos

---

## 📌 Convenções de Nomes

### Livros
```
books/ai-engineering-huyen/        ← livro-autor-ano
books/clean-code-martin/
books/system-design-interview/
```

### Capítulos
```
capitulo-1-introducao-ia.md          ← descritivo
capitulo-2-modelos-fundacao.md
```

### Conceitos
```
engenharia-de-ia.md                 ← kebab-case
fine-tuning.md
rag-agents.md
```

### Sínteses
```
fundamentos-engenharia-ia.md         ← visão geral
comparacao-prompts-vs-fine-tuning.md ← comparações
```

---

## ✨ Boas Práticas

1. **Um livro = Um diretório**: Cada livro isolado
2. **Um `index.md` por livro**: Metadados e navegação
3. **Ligações internas**: Use `[[cap-X]]` para relacionar
4. **Exemplo de Markdown**: Siga estrutura acima
5. **Português Brasileiro**: Consistência idiomática
6. **Citações**: Sempre aponte para `[[livro]]` de origem

---

## 🔍 Como Consultar

1. **Comece em:** `personal/index.md` (porta de entrada)
2. **Escolha um livro:** `books/[livro]/index.md`
3. **Navegue por:** Capítulos, conceitos, sínteses
4. **Procure por:** Use busca do Obsidian (Cmd+Shift+F)

---

## 📊 Versionamento

Cada livro tem seu próprio versionamento em `index.md`:
```
**Data:** 2025-04-15
**Cobertura:** 95%
**Status:** ✅ Análise Completa
```

---

## 🚀 Adição de Novo Livro

1. Criar pasta: `books/novo-livro/`
2. Criar estrutura:
   ```
   novo-livro/
   ├── index.md
   └── wiki/
       ├── concepts/
       ├── sources/
       └── overviews/
   ```
3. Seguir mesmo padrão de análise
4. Atualizar `personal/index.md`

---

**Versão:** 1.0  
**Atualizado:** 2025-04-15  
**Idioma:** Português Brasileiro
