import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { env } from 'vite-plugin-env'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    env({
      file: '.env'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
