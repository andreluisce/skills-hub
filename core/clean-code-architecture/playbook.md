# Playbook

## Sources
- Codigo Limpo (Clean Code) — Robert C. Martin
- Arquitetura Limpa (Clean Architecture) — Robert C. Martin
- Desenvolvimento Agil Limpo — Robert C. Martin

## Objetivo
Escrever código que qualquer desenvolvedor entende, modifica e testa sem surpresas.

## Regras de Código Limpo
- Nomes revelam intenção — se precisa de comentário, renomeie.
- Funções fazem uma coisa. Tamanho ideal: 5-15 linhas.
- 0-2 argumentos por função. 3+ requer justificativa.
- Sem efeitos colaterais ocultos. Sem flags booleanos como parâmetro.
- Não retorne null — lance exceção ou use null object.
- Código comentado é proibido — delete ou commite.

## Regras de Arquitetura Limpa
- Dependency Rule: dependências apontam apenas para dentro (Entities ← Use Cases ← Adapters ← Frameworks).
- Entities não conhecem Use Cases. Use Cases não conhecem UI.
- Database é detalhe — regra de negócio não sabe qual banco existe.
- Cruzamentos de boundary: apenas DTOs simples.

## SOLID
- S: uma razão para mudar por módulo.
- O: aberto para extensão, fechado para modificação.
- L: subtipos substituem o tipo base sem surpresas.
- I: interfaces específicas por cliente.
- D: dependa de abstrações, não de concreções.
