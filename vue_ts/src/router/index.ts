import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'search',
    component: () => {
      return import('../views/SearCh.vue')
    },
  },
  { path: '/:pathMatch(.*)', redirect: '/', hidden: true }, // 不存在页面重定向到
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((_to, _from, next) => {
  if (_to.path == '/') {
    next()
  } else {
    next('/')
  }
})

export default router
