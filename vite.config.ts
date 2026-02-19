import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Für GitHub Pages (Projekt-Seite): base = '/REPO-NAME/'
  // Bei Vercel/Netlify oder User-Seite (username.github.io): base = '/'
  base: '/LernApp/',
})
