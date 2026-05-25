import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import dotenv from 'dotenv';

// Load .env files if present (essential for local dev/Vite builds)
dotenv.config();

export default defineConfig(() => {
  const chaveKeyValue = process.env.ChaveKey || process.env.VITE_GEMINI_API_KEY || '';
  
  return {
    plugins: [react(), tailwindcss()],
    envPrefix: ['VITE_', 'ChaveKey', 'CHAVE_KEY'],
    define: {
      'process.env.ChaveKey': JSON.stringify(chaveKeyValue),
      'import.meta.env.ChaveKey': JSON.stringify(chaveKeyValue),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
