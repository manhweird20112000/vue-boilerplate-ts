import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'

import { resolve } from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'


export default ({ mode }: any) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') }
  return defineConfig({
    server: {
      host: true,
      hmr: { overlay: false },
      cors: true ,
      port:  process.env['VITE_PORT'] || 3000,
      open: true,
      fs: {
        strict: true
      }
    },
    css: {
      devSourcemap: true
    },
    plugins: [
      vue(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false
          })
        ],
        dirs: [
          './src/components'
        ],
        dts: './src/types/components.d.ts'
      }),
      AutoImport(
        {
          include: [
            /\.[tj]sx?$/,
            /\.vue$/, /\.vue\?vue/,
            /\.md$/
          ],
          resolvers: [
            AntDesignVueResolver()
          ],
          imports: [
            'vue',
            'vue-router',
            'pinia'
          ],
          eslintrc: {
            enabled: true,
            filepath: './.eslintrc-auto-import.json',
            globalsPropValue: true
          },
          dts: './src/types/auto-imports.d.ts',
          vueTemplate: true
        }
      )
    ],

    define: {
      'process.env': process.env
    },
    resolve: {
      alias: [
        { find: '@', replacement: resolve(__dirname, './src') },
        {
          find: 'assets',
          replacement: resolve(__dirname, '../src/assets')
        },
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
        },
        {
          find: 'vue',
          replacement: 'vue/dist/vue.esm-bundler.js'
        }
      ],
      dedupe: ['vue'],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia', 'vue-i18n']
          }
        }
      },
      chunkSizeWarningLimit: 2000
    }
  })
}
