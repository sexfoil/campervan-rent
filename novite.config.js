import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/campervan-rent/',
  resolve: {
    alias: {
      properties: ['/src/properties'],
      components: ['/src/components'],
      pages: ['/src/pages'],
      api: ['/src/api'],
      svg: ['/src/svg'],
    },
  },
});
