import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

console.log('[v0] Project root:', projectRoot);

try {
  // Check if git is already initialized
  try {
    execSync('git rev-parse --git-dir', { cwd: projectRoot, stdio: 'pipe' });
    console.log('[v0] Git repository already initialized');
  } catch {
    console.log('[v0] Initializing git repository...');
    execSync('git init', { cwd: projectRoot });
    execSync('git config user.email "v0[bot]@users.noreply.github.com"', { cwd: projectRoot });
    execSync('git config user.name "v0[bot]"', { cwd: projectRoot });
    
    // Add remote
    execSync('git remote add origin https://github.com/dree-max/openclaw-setup-website.git', { cwd: projectRoot });
  }

  // Check git status
  console.log('[v0] Checking git status...');
  const status = execSync('git status --short', { cwd: projectRoot, encoding: 'utf-8' });
  console.log('[v0] Git status:\n', status);

  // Stage all changes
  console.log('[v0] Staging changes...');
  execSync('git add .', { cwd: projectRoot });

  // Commit changes
  console.log('[v0] Committing changes...');
  execSync('git commit -m "Add lobster favicon to the site"', { cwd: projectRoot });
  console.log('[v0] Commit successful');

  // Fetch the latest from remote
  console.log('[v0] Fetching from remote...');
  execSync('git fetch origin', { cwd: projectRoot });

  // Push to the feature branch
  console.log('[v0] Pushing to v0/dree-max-add488ce branch...');
  execSync('git push -u origin v0/dree-max-add488ce', { cwd: projectRoot });
  console.log('[v0] Push successful!');

} catch (error) {
  console.error('[v0] Error:', error.message);
  if (error.stderr) {
    console.error('[v0] stderr:', error.stderr.toString());
  }
  process.exit(1);
}
