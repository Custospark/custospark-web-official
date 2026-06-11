import { execSync } from 'child_process';

console.log('🧪 Vera: Extended — running typecheck...');

try {
  execSync('npx tsc -b --noEmit', { stdio: 'inherit', encoding: 'utf8' });
  console.log('🧪 Vera: Extended pass — typecheck OK.');
} catch {
  console.error('❌ Vera: Extended fail — typecheck errors.');
  process.exit(1);
}
