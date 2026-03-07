export function toCodex(skill) {
  const yaml = `---\nname: ${skill.name}\ndescription: ${skill.description} Use quando o pedido envolver: ${skill.triggers.join(', ')}.\n---\n`;
  const workflow = skill.workflow.map((w) => `${w.step}. ${w.action}`).join('\n');
  const outputs = skill.outputContract.map((o, i) => `${i + 1}. ${o}`).join('\n');

  const skillMd = `${yaml}
# ${skill.displayName}

## Stack alvo
- ${skill.stack.framework}
- ${skill.stack.react}
- ${skill.stack.serverState}
- ${skill.stack.ui}
- ${skill.stack.workspace}

## Workflow
${workflow}

## Saída esperada
${outputs}
`;

  const openaiYaml = `interface:\n  display_name: "${skill.displayName}"\n  short_description: "Arquitetura React em stack moderna"\n  default_prompt: "Use $${skill.name} para desenhar ou refatorar arquitetura frontend com ${skill.stack.framework}, ${skill.stack.react} e ${skill.stack.serverState}."\n`;

  return {
    files: [
      { path: `SKILL.md`, content: skillMd },
      { path: `agents/openai.yaml`, content: openaiYaml }
    ]
  };
}
