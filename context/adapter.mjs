import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const source = path.join(__dirname, 'project.md');

const PREAMBLES = {
  'CLAUDE.md': '<!-- Generated from context/project.md — do not edit manually. Run: pnpm run context -->\n\n',
  'AGENTS.md': '<!-- Generated from context/project.md — do not edit manually. Run: pnpm run context -->\n\n',
  'GEMINI.md': '<!-- Generated from context/project.md — do not edit manually. Run: pnpm run context -->\n\n',
};

export async function generateContextFiles() {
  const content = await fs.readFile(source, 'utf-8');

  for (const [filename, preamble] of Object.entries(PREAMBLES)) {
    const dest = path.join(root, filename);
    await fs.writeFile(dest, preamble + content, 'utf-8');
    console.log(`Generated ${filename}`);
  }
}
