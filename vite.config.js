import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, './src/core/api'),
      '@boot': path.resolve(__dirname, './src/ui/boot'),
      '@components': path.resolve(__dirname, './src/ui/components'),
      '@config': path.resolve(__dirname, './src/core/config'),
      '@core': path.resolve(__dirname, './src/core'),
      '@hooks': path.resolve(__dirname, './src/ui/hooks'),
      '@pages': path.resolve(__dirname, './src/ui/pages'),
      '@public': path.resolve(__dirname, './public'),
      '@services': path.resolve(__dirname, './src/core/services'),
      '@styles': path.resolve(__dirname, './src/ui/styles'),
      '@utils': path.resolve(__dirname, './src/core/utils'),
      '@views': path.resolve(__dirname, './src/ui/views'),
    },
  },
});
