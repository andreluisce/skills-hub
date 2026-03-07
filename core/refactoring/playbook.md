# Playbook

## Source
Refatoração — Martin Fowler

## Objetivo
Melhorar estrutura interna sem alterar comportamento externo, em passos pequenos e seguros.

## Regra Zero
Nunca refatore sem testes cobrindo o comportamento atual.

## Code Smells Mais Comuns

| Smell | Remédio |
|---|---|
| Long Method/Component | Extract Function/Component |
| Large Class/God Component | Separar hook + componente apresentação |
| Duplicate Code | Extract Function + consolidar |
| Long Parameter List | Introduce Parameter Object |
| Feature Envy | Move Function para o módulo com os dados |
| Primitive Obsession | Replace Primitive with Object / Enum |
| Shotgun Surgery | Consolidar lógica relacionada |

## Processo
1. Rode os testes — todos passam.
2. Identifique um smell específico.
3. Aplique UMA refatoração catalogada.
4. Rode os testes — todos continuam passando.
5. Commit.
6. Repita.
