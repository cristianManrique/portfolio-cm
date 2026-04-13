import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from 'vite-plugin-sitemap';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },

    }),
    tailwindcss(),
    sitemap(),
  ],
  json: {
    stringify: true,  // ← enables direct JSON imports
  },
  server: {
    port: 3000,
    open: true,
     // ── Watch i18n locale files for hot reload ─────────────────────
    watch: {
      include: ['src/**', 'src/i18n/locales/**'],
    },
  }
});
