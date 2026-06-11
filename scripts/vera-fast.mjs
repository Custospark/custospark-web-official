import { execSync } from 'child_process';
import { existsSync, readFileSync } from 'fs';

const changed = execSync('git diff --name-only HEAD --diff-filter=ACM | grep -E "\\.(ts|tsx)$" || true', { encoding: 'utf8' })
  .split('\n')
  .filter(Boolean);

if (changed.length === 0) {
  console.log('🧪 Vera: Fast — no changed .ts/.tsx files to lint.');
  process.exit(0);
}

try {
  execSync(`npx eslint ${changed.join(' ')} --max-warnings=0`, { stdio: 'inherit', encoding: 'utf8' });
  console.log(`🧪 Vera: Fast pass — eslint (${changed.length} files).`);
} catch {
  console.error(`❌ Vera: Fast fail — eslint errors in changed files.`);
  process.exit(1);
}
