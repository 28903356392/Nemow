import { request } from '@/utils/request'
enum URL {
  users = '/web/v1/startup/webui/localeinfo',
  loginver = '/web/v1/startup/deviceinfo',
  usersState = '/web/v1/startup/usersstate',
  productType = '/web/v1/startup/productinfo',
  userLogin = '/web/v1/user/login',
}

export const users = () => request({ url: URL.users, method: 'get' })

export const loginver = () => request({ url: URL.loginver, method: 'get' })

export const userLogin = (data: TypeLogin) => request({ url: URL.userLogin, method: 'post', data })

export const usersState = () => request({ url: URL.usersState, method: 'get' })

export const productType = () => request({ url: URL.productType, method: 'get' })

export interface TypeLogin {
  username: string
  password: string
}
