import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import viteEslint from 'vite-plugin-eslint'
import viteStylelint from 'vite-plugin-stylelint'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteEslint(), viteStylelint()],
  resolve: {
    alias: {
      // 这里就是需要配置resolve里的别名
      '@': path.resolve(__dirname, './src'), // path记得引入
      // 'vue': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
    },
  },
})
