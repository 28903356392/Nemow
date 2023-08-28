import { defineStore } from 'pinia'
// import { userTpye } from './types'

import { ref } from 'vue'
const userAppStrote = defineStore(
  'useAppStrote',
  () => {
    const count = ref(2)
    const inis = () => {
      return count.value++
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
