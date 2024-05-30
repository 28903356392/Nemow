import { createPinia } from 'pinia'
// * pinia持久化数据，可以将 pinia 的状态持久化到本地存储中，以便在页面刷新或重新加载后保持状态的一致性。
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 引入自定方法
import userAppStrote from './user/index'
export { userAppStrote }

const pinia = createPinia()

// 注册持久化插件
pinia.use(piniaPluginPersistedstate)

export default pinia
