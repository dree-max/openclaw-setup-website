import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

try {
  console.log('[v0] Starting git push process...');
  
  // Change to project directory
  process.chdir(projectRoot);
  
  // Check git status
  const status = execSync('git status --short', { encoding: 'utf-8' });
  console.log('[v0] Git status:\n', status);
  
  // Add all changes
  console.log('[v0] Adding changes...');
  execSync('git add .', { stdio: 'inherit' });
  
  // Commit changes
  console.log('[v0] Committing changes...');
  execSync('git commit -m "Add lobster favicon to the site"', { stdio: 'inherit' });
  
  // Push to origin
  console.log('[v0] Pushing to GitHub...');
  execSync('git push origin HEAD', { stdio: 'inherit' });
  
  console.log('[v0] Successfully pushed changes to GitHub!');
} catch (error) {
  console.error('[v0] Error during git operations:', error.message);
  process.exit(1);
}
