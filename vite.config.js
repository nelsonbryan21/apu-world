import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: '0.0.0.0',
    port: 61584,
    strictPort: true,
    allowedHosts: [
      'node19.botkeep.cloud'
    ]
  }
})
