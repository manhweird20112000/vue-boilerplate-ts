import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: []
    }),
    AutoImport(
    {
      resolvers: [],
      imports: [
        'vue',
        'vue-router',
        'pinia',
      ],
      dts: true,
    }
  )],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      {
        find: 'assets',
        replacement: resolve(__dirname, '../src/assets'),
      },
    ],
    dedupe: ['vue'],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  }
})
