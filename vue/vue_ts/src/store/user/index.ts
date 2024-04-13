import { defineStore } from 'pinia'
import { userTpye } from './types'
import { productType } from '@/api'
const userAppStrote = defineStore(
  'useAppStrote',
  (): userTpye => {
    // 产品类型
    const ProductType = ref('2')
    productType().then((res: any) => {
      ProductType.value = res.data.ProductType
    })

    // 防抖
    var timer: any = null
    const AntiShake = (request: any, params: object, time: number) => {
      return new Promise(async r => {
        if (timer == null) {
          timer = setTimeout(() => {
            request(params).then((res: any) => {
              timer = null
              r(res)
            })
          }, time * 1000)
        } else {
          r(false)
        }
      })
    }
    return {
      ProductType,
      productType,
      timer,
      AntiShake,
    }
  },
  {
    persist: true, // 开起持久化
  }
)

export default userAppStrote
