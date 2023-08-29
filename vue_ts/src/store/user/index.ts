import { defineStore } from 'pinia'
import { userTpye } from './types'

const userAppStrote = defineStore(
  'useAppStrote',
  (): userTpye => {
    const count = ref(2)
    const inis = <T>(): T => {
      return count.value++ as T
    }
    return {
      count,
      inis,
    }
  },
  {
    persist: true, // 开起持久化
  }
)

export default userAppStrote
