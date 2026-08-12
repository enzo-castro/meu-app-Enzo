import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O nome do repositório faz parte da URL publicada no GitHub Pages.
export default defineConfig({
  base: '/meu-app-Enzo/',
  plugins: [react()],
})
