import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => {
      return import('../components/HomeMode.vue')
    },
  },
  { path: '/:pathMatch(.*)', redirect: '/home', hidden: true }, // 不存在页面重定向到
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async to => {
  if (to.path == '/home') {
  }
})

export default router
