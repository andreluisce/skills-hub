import { spawnSync } from 'node:child_process';

function run(cmd, args) {
  const out = spawnSync(cmd, args, { encoding: 'utf-8' });
  if (out.status !== 0) {
    console.error(out.stdout);
    console.error(out.stderr);
    process.exit(out.status ?? 1);
  }
}

run('node', ['cli/skills-hub.mjs', 'validate']);
run('node', ['cli/skills-hub.mjs', 'build']);
run('node', ['cli/skills-hub.mjs', 'audit', '--project', 'cog-ministry-docs', '--out', 'dist/audit/smoke']);
console.log('Smoke OK');
