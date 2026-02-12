import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/count-down/',
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});