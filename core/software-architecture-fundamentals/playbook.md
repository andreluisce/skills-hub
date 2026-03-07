# Playbook

## Source
Fundamentals of Software Architecture — Mark Richards & Neal Ford

## Objetivo
Tomar decisões arquiteturais defensáveis com trade-offs explícitos e verificação contínua de qualidade.

## Leis da Arquitetura
- Tudo é trade-off. Se não encontrou o trade-off, ainda não procurou.
- "Por que" é mais importante que "como".

## Quality Attributes — Priorize 3-7
Disponibilidade, Escalabilidade, Manutenibilidade, Testabilidade, Performance, Segurança, Deployability.

## Modularity
- Alta coesão: elementos dentro de um módulo pertencem juntos.
- Baixo acoplamento: mudança em um módulo não exige mudança em outro.
- Teste: "Quantos módulos mudam se eu trocar o banco?" — se mais de um, há problema.

## ADR Template
1. Título: decisão em uma frase.
2. Status: proposta / aceita / deprecada.
3. Contexto: por que esta decisão foi necessária.
4. Decisão: o que foi decidido.
5. Consequências: trade-offs, o que fica mais fácil, o que fica mais difícil.

## Fitness Functions
- Typecheck + lint no CI.
- Bundle size budget por PR.
- Cobertura mínima de testes como gate.
- Imports proibidos entre layers verificados automaticamente.
