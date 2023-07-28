import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import { LoginForm, LoginResponseData } from '@/api/user/types.ts'
import { UserState } from '@/store/modules/types/type.ts'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token.ts'
import { constantRouter } from '@/router/routers.ts'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRouter,
    }
  },
  actions: {
    async userLogin(data: LoginForm) {
      const result: LoginResponseData = await reqLogin(data)
      if (result.code == 200) {
        // 断言
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})
export default useUserStore
