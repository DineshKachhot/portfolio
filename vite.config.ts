import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for assets and routing
  // Default: '/' for local dev and Vercel
  // GitHub Pages: set VITE_BASE_PATH='/portfolio/' in GitHub Actions
  base: process.env.VITE_BASE_PATH || '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
