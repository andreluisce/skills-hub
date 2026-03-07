export function toClaude(skill) {
  const prompt = [
    `Skill: ${skill.displayName}`,
    `Description: ${skill.description}`,
    `Triggers: ${skill.triggers.join(', ')}`,
    `Stack: ${skill.stack.framework}; ${skill.stack.react}; ${skill.stack.serverState}; ${skill.stack.ui}; ${skill.stack.workspace}`,
    'Workflow:',
    ...skill.workflow.map((w) => `- ${w.step}. ${w.action}`),
    'Output Contract:',
    ...skill.outputContract.map((o) => `- ${o}`)
  ].join('\n');

  return {
    files: [
      { path: 'CLAUDE_SKILL.md', content: prompt }
    ]
  };
}
