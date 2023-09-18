import { createApp, Directive } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import pinia from './store'
// import 'element-plus/dist/index.css'

// 自定义指令
const authDirective: Directive = {
  mounted(el, binding) {
    el.href = binding.value + '?token=your_token'
  },
}

createApp(App).directive('auth', authDirective).use(router).use(pinia).mount('#app')
