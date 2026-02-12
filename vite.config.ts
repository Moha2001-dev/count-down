import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/count-down/',
  plugins: [vue()],
  build: {
    outDir: 'dist', // specify output directory
    emptyOutDir: true, // clean the output directory before building
    rollupOptions: {
      // Additional Rollup options here if needed
    },
  },
});