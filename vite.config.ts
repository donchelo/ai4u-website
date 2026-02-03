import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Configurado para dominio personalizado (ai4u.com.co) con CNAME
  plugins: [
    react(),
    process.env.ANALYZE === 'true'
      ? visualizer({ filename: 'dist/stats.html', open: false, gzipSize: true })
      : undefined
  ].filter(Boolean),
  server: {
    port: 3002,
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'mui-icons': ['@mui/icons-material'],
          'mui-vendor': ['@mui/material', '@emotion/react', '@emotion/styled']
        }
      }
    }
  },
  publicDir: 'public'
});

