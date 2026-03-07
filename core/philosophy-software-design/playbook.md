# Playbook

## Source
A Philosophy of Software Design — John Ousterhout

## Objetivo
Reduzir complexidade sistematicamente para que qualquer desenvolvedor possa modificar o sistema com confiança.

## Regras
- Strategic programming: invista 10-15% do tempo em qualidade de design.
- Deep modules: interface simples, implementação rica — máxima funcionalidade por unidade de interface.
- Evite pass-through methods — wrapper sem valor é módulo raso.
- Information hiding: esconda decisões de design que podem mudar.
- Código óbvio: novo desenvolvedor entende sem perguntar.
- Inconsistência é veneno — se faz de um jeito em um lugar, faça igual em todos.
- Comentários explicam o "por que", não o "o que".

## Complexidade — Sintomas
- Change amplification: uma mudança simples exige alteração em muitos lugares.
- Cognitive load: precisa saber muito para fazer uma mudança simples.
- Unknown unknowns: não é óbvio quais partes precisam mudar.
