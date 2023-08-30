import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import pinia from './store'
// import 'element-plus/dist/index.css'
createApp(App).use(router).use(pinia).mount('#app')
