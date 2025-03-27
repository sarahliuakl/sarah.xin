import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  // Add server configuration for local development proxy
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path
      }
    }
  },
  plugins: [
    react()
  ],
  // Ensure static assets are correctly handled 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate the correct runtime config
    sourcemap: true
  }
})