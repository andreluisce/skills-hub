export function toGemini(skill) {
  const config = {
    instruction: `${skill.description}`,
    triggers: skill.triggers,
    stack: skill.stack,
    workflow: skill.workflow,
    outputContract: skill.outputContract
  };

  return {
    files: [
      { path: 'gemini-skill.json', content: JSON.stringify(config, null, 2) }
    ]
  };
}
