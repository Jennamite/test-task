import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/assets/styles', import.meta.url)),
      '@types': fileURLToPath(new URL("./src/types.d.ts", import.meta.url))
    }
  },
  css: {
    postcss: {
			plugins: [autoprefixer],
		},
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/index.scss";`
      }
    }
  }
})
