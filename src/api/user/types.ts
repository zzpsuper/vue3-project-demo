export interface LoginForm {
  username: string
  password: string
}
interface DataType {
  token: string
}
export interface LoginResponseData {
  code: number
  data: DataType
}

interface UserInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface User {
  checkUser: UserInfo
}
export interface UserResponseData {
  code: number
  data: User
}
