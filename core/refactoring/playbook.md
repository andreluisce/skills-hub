# Playbook

## Source
Refactoring — Martin Fowler

## Objective
Melhorar estrutura interna without alterar comportamento externo, in passos pequenos and seguros.

## Regra Zero
Nunca refatore without testes cobrindo o comportamento atual.

## Code Smells Mais Comuns

| Smell | Medicine |
|---|---|
| Long Method/Component | Extract Function/Component |
| Large Class/God Component | Separate hook + component presentation |
| Duplicate Code | Extract Function + consolidar |
| Long Parameter List | Introduce Parameter Object |
| Feature Envy | Move function to the module that owns the data |
| Primitive Obsession | Replace Primitive with Object / Enum |
| Shotgun Surgery | Consolidate related logic |

## Processo
1. Rode the testes — todos passam.
2. Identify a specific smell.
3. Apply ONE cataloged refactoring.
4. Rode the testes — todos continuousm passando.
5. Commit.
6. Repita.
