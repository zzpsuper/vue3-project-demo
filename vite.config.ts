import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import viteEslint from 'vite-plugin-eslint'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      viteEslint(),
      // svg插件，需要安装vite-plugin-svg-icons插件，并且在main.ts中引入配置：import 'virtual:svg-icons-register'
      createSvgIconsPlugin({
        // ↓本地svg图片地址，配置存放路径
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 图标ID的样式
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve', //开发阶段使用mock
      }),
    ],
    resolve: {
      alias: {
        // 这里就是需要配置resolve里的别名
        '@': path.resolve(__dirname, './src'), // path记得引入
        // 'vue': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnable: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  }
})
