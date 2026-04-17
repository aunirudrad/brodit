import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
   plugins: [tailwindcss(), react()],
   base: process.env.VITE_BASE_PATH || "/",
   publicDir: 'public',
   server: {
      fs: {
         allow: ['..']
      }
   },
   build: {
      outDir: 'dist',
      assetsDir: 'assets'
   }
})
