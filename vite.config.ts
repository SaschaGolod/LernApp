import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative Pfade – funktionieren zuverlässig auf GitHub Pages
  base: './',
})
