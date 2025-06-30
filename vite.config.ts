import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portafolio/', // 👈 MUY IMPORTANTE: este debe coincidir con el nombre del repo
})
