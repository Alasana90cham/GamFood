import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
    }
  },
  plugins: [react()],
})
