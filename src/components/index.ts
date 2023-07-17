import { App, defineAsyncComponent } from 'vue'
export default {
  // 注意，这种自动注册全局组件是以文件名作为组件名引用注册的，所以不要使用index作为组件的文件名
  install(app: App): void {
    const requireModules: any = import.meta.glob('@/components/**/*.vue')
    Object.keys(requireModules).forEach((path: string): void => {
      const result: any = path.match(/.*\/(.+).vue$/)
      const modulesContent: any = requireModules[path]
      app.component(result[1], defineAsyncComponent(modulesContent))
    })
  },
}
