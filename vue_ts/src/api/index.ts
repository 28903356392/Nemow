import { request } from '@/utils/request'
enum URL {
  users = '/web/v1/startup/webui/localeinfo',
  userss = '/web/v1/setting/network/apn/multi',
}

export const users = () => request({ url: URL.users, method: 'get' })
