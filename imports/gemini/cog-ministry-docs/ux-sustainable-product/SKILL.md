# Sustainable Ministerial Product

---
name: ux-sustainable-product
description: Especialista em UX de alta performance e sustentabilidade digital para o COG Ministry Docs. Use para reduzir peso, energia e fricção sem degradar a experiência ministerial.
---

## 1. Performance como Sustentabilidade
Aplicações mais rápidas consomem menos energia e funcionam melhor em regiões com internet instável.

### A. Otimização de Assets
- **Signatures**: Garanta que as assinaturas capturadas via `react-signature-canvas` sejam otimizadas (PNG comprimido) antes de serem enviadas ao Supabase Storage.
- **Fonts**: Use fontes nativas ou otimizadas (Geist via Next.js Font) para evitar layouts shifts e downloads desnecessários.

### B. Client-side vs Server-side
- Gere o PDF no cliente utilizando `@react-pdf/renderer` para economizar processamento no servidor e largura de banda.

## 2. Redução de Fricção (Sustentabilidade Cognitiva)
- Cada campo desnecessário é um desperdício de tempo humano e energia computacional.
- **Ação**: Remova campos que não constam nos `sources/*.pdf` originais, a menos que sejam estritamente necessários para a funcionalidade digital (ex: e-mail de login).

## 3. Código Verde (Green Code)
- Utilize as capacidades do **Next.js App Router** para enviar o mínimo de JavaScript necessário para o navegador.
- Aproveite o **Turbopack** para builds rápidos e eficientes durante o desenvolvimento.
- **RLS no Supabase**: Consultas otimizadas evitam sobrecarga no banco de dados.

## 4. Longevidade do Produto
- Um software sustentável é um software que dura.
- **TypeScript**: Garante que o código seja manutenível por outros desenvolvedores da Igreja no futuro.
- **Documentação**: Manter `docs/*.md` atualizados é uma forma de sustentabilidade organizacional.
