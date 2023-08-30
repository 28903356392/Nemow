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

    // s
    return {
      ProductType,
      productType,
    }
  },
  {
    persist: true, // 开起持久化
  }
)

export default userAppStrote
