# LLM Wiki para Estudar Livros

> Sistema personalizado para análise e estudo de livros com Obsidian

---

## 🎯 Visão Geral

Este sistema adapta a skill `llm-wiki` para **estudar livros de forma estruturada e persistente**.

### Estrutura

```
personal/                          ← Vault raiz
├── index.md                        ← Portal de entrada
└── books/
    └── [nome-livro]/
        ├── index.md                ← Metadados, capítulos, insights
        └── wiki/
            ├── concepts/           ← Capítulos e conceitos
            ├── sources/            ← Resumo da fonte
            └── overviews/          ← Sínteses
```

### Características

✅ **Estruturado:** Cada livro tem sua pasta isolada  
✅ **Escalável:** Adicione novos livros seguindo padrão  
✅ **Consistente:** Mesma estrutura para todos os livros  
✅ **Navegável:** Index.md raiz como porta de entrada  
✅ **Sem Redundância:** Arquivo original no disco, referência no vault  

---

## 📖 Como Usar

### 1. Ingerir um Novo Livro

```
/ingest ~/path/para/livro.pdf
```

Isso cria:
- `books/[livro]/index.md` — Metadados e navegação
- `books/[livro]/wiki/concepts/cap-1.md` — Para cada capítulo
- `books/[livro]/wiki/sources/[livro].md` — Resumo da fonte
- `books/[livro]/wiki/overviews/` — Sínteses

### 2. Consultar o Vault

```
/query O que é fine-tuning?
```

Responde com citações dos livros estudados.

### 3. Expandir Análise

```
/expandir capitulo-5
```

Aprofunda análise do capítulo com exemplos e casos de uso.

---

## 📋 Convenções

Veja **[CONVENÇÕES-PESSOAIS.md](./CONVENÇÕES-PESSOAIS.md)** para:

- Estrutura de cada `index.md` do livro
- Formato de capítulos
- Formato de resumos
- Nomenclatura de arquivos
- Boas práticas

---

## 📚 Livros Atuais

1. **[[books/ai-engineering-huyen/index|Engenharia de IA - Chip Huyen (2024)]]**
   - Status: ✅ Análise Completa
   - Capítulos: 10
   - Data: 2025-04-15

---

## 🚀 Adicionar Novo Livro

1. Ter o PDF em algum lugar (`~/Documents/Livros/` recomendado)
2. Executar:
   ```
   /ingest ~/Documents/Livros/novo-livro.pdf
   ```
3. Sistema cria estrutura automaticamente
4. `personal/index.md` é atualizado automaticamente

---

## 📂 Arquivos Importantes

| Arquivo | Propósito |
|---------|-----------|
| `CONVENÇÕES-PESSOAIS.md` | Guia de estrutura e convenções |
| `playbook.md` | Documentação original do LLM Wiki |
| `skill.yaml` | Metadados da skill |
| `vault-init.mjs` | Script de inicialização (não usado aqui) |

---

## 🔧 Configuração

### Variável de Ambiente

```bash
export OBSIDIAN_VAULT_DIR=~/obsidian-vaults/personal
```

Já configurada em `.claude/settings.json`:
```json
{
  "env": {
    "OBSIDIAN_VAULT_DIR": "~/obsidian-vaults/personal"
  }
}
```

---

## 📌 Dicas

1. **Acesse pelo Obsidian:** Abra `/Users/andreluisce/obsidian-vaults/personal/`
2. **Comece por:** `index.md` raiz → escolha um livro
3. **Procure:** Use Cmd+Shift+F no Obsidian para buscar
4. **Expanda:** Peça ao Claude Code para expandir capítulos

---

## 🎓 Exemplo: Estudando "Engenharia de IA"

1. Abrir `personal/index.md`
2. Clicar em "Engenharia de IA"
3. Ler `books/ai-engineering-huyen/index.md`
4. Explorar capítulos em `wiki/concepts/`
5. Consultar sínteses em `wiki/overviews/`

---

**Versão:** 1.0  
**Atualizado:** 2025-04-15  
**Idioma:** Português Brasileiro
