import request from '@/utils/request'
import type { LoginForm, LoginResponseData, UserResponseData } from '@/api/user/types.ts'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user',
}
export const reqLogin = (data: LoginForm) =>
  request.post<any, LoginResponseData>(API.LOGIN_URL, data)
export const getUserInfo = () => request.get<any, UserResponseData>(API.USERINFO_URL)
