import path from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [createVuePlugin(), Components()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '~': path.resolve(__dirname, '/')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.js'),
      name: 'Hub Components',
      fileName: (format) => `components.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
