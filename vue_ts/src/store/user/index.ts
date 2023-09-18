import { defineStore } from 'pinia'
import { userTpye } from './types'
import axios from 'axios'

const userAppStrote = defineStore(
  'useAppStrote',
  (): userTpye => {
    // 产品类型

    // 防抖
    var timer: any = null
    const AntiShake = (request: any, params: object, time: number) => {
      return new Promise(async r => {
        if (timer == null) {
          timer = setTimeout(() => {
            request(params)
              .then((res: any) => {
                timer = null
                r(res)
              })
              .catch(() => {
                r(false)
              })
          }, time * 1000)
        } else {
          r(false)
        }
      })
    }
    // 登录
    const web_doc = async () => {
      var par = {
        username: 'turin',
        password: 'memohi2020',
        recaptcha: '',
      }
      console.log(import.meta.env, (import.meta.env as any).MODE == 'development')

      const url = (import.meta.env as any).MODE == 'development' ? '/web' : import.meta.env.VITE_BASE_URL
      return await axios.post(url + '/api/login', par)
    }
    return {
      timer,
      AntiShake,
      web_doc,
    }
  },
  {
    persist: true, // 开起持久化
  }
)

export default userAppStrote
