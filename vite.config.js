import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import ghPages from 'vite-plugin-gh-pages'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [ tailwindcss(),react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
