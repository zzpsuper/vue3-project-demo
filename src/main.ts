import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//svg的配置
import 'virtual:svg-icons-register'

// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 全局组件-自定义组件
import globalComponent from '@/components'
import '@/styles/index.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(globalComponent)
app.use(router)
app.mount('#app')
