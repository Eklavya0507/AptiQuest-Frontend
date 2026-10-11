import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For a native Android build, relative asset URLs are required.
// GitHub Pages continues to use the organization/repository URL automatically.
const isAndroid = process.env.VITE_APP_TARGET === 'android';
const githubRepository = process.env.GITHUB_REPOSITORY || '';
const repoName = githubRepository.split('/')[1] || '';
const isRootPagesRepo = repoName.toLowerCase().endsWith('.github.io');
const pagesBase = process.env.GITHUB_ACTIONS === 'true' && repoName && !isRootPagesRepo
  ? `/${repoName}/`
  : '/';

export default defineConfig({
  plugins: [react()],
  base: isAndroid ? './' : pagesBase,
});
