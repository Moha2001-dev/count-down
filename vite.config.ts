import { defineConfig } from 'vite';

export default defineConfig({
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