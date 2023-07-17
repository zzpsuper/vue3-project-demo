import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import viteEslint from 'vite-plugin-eslint'
import viteStylelint from 'vite-plugin-stylelint'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
export default defineConfig(function (_a) {
  var command = _a.command
  return {
    plugins: [
      vue(),
      viteEslint(),
      viteStylelint(),
      // svg插件，需要安装vite-plugin-svg-icons插件，并且在main.ts中引入配置：import 'virtual:svg-icons-register'
      createSvgIconsPlugin({
        // ↓本地svg图片地址，配置存放路径
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 图标ID的样式
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
      }),
    ],
    resolve: {
      alias: {
        // 这里就是需要配置resolve里的别名
        '@': path.resolve(__dirname, './src'),
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
