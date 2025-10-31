import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for assets and routing
  // Default: '/' for local dev and Vercel
  // GitHub Pages with custom domain: set VITE_BASE_PATH='/' (custom domains serve from root)
  // GitHub Pages without custom domain: would need VITE_BASE_PATH='/portfolio/' (repository subdirectory)
  // Current setup uses '/' for custom domain kdpro.info
  base: process.env.VITE_BASE_PATH || '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
