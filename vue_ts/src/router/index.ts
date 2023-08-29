import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => {
      return import('../components/HomeMode.vue')
    },
  },
  {
    path: '/ba',
    name: 'ba',
    component: () => {
      return import('../components/BA.vue')
    },
  },
  { path: '/:pathMatch(.*)', redirect: '/home', hidden: true }, // 不存在页面重定向到
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((_to, _from, next) => {
  if (_to.path == '/home') {
    next()
  } else if (_to.path == '/ba') {
    next()
  }
  console.log(_to.path)
})

export default router
