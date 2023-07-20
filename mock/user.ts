import { MockMethod } from 'vite-plugin-mock'

function createUserList() {
  return [
    {
      userId: 1,
      avatar: '',
      username: 'zzp',
      password: '111111',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail'],
      routes: ['home'],
      token: 'admin token',
    },
    {
      userId: 2,
      avatar: '',
      username: 'zzp2',
      password: '222',
      desc: '平台管理员2',
      roles: ['平台管理员2'],
      buttons: ['cuser.detail2'],
      routes: ['home2'],
      token: 'admin token2',
    },
  ]
}
export default [
  {
    url: '/dev/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      const checkUser = createUserList().find((item) => {
        return item.username === username && item.password === password
      })
      if (!checkUser) {
        return { code: 409, data: { message: '账号密码不正确' } }
      }
      const { token } = checkUser
      return { code: 200, data: { token } }
    },
  },
  {
    url: '/dev/user',
    method: 'get',
    response: (request) => {
      const token = request.headers.token
      const checkUser = createUserList().find((item) => {
        item.token = token
      })
      if (!checkUser) {
        return { code: 200, data: { message: '获取用户信息失败' } }
      }
      return { code: 200, data: { checkUser } }
    },
  },
] as MockMethod[]
