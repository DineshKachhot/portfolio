import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages deployment, use your repository name as the base path
  // If your repository is named 'portfolio', keep this as '/portfolio/'
  // If your repository is named something else, change it to '/your-repo-name/'
  base: '/portfolio/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
