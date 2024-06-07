import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: () => import('../vite/Home/index.vue'),
  }, {
    path: '/ContentArea',
    name: 'ContentArea',
    component: () => import('../components/ContentArea/index.vue'),
  }, {
    path: '/Layout',
    name: 'Layout',
    component: () => import('../components/Layout/index.vue'),
  }, {
    path: '/MenuClassification',
    name: 'MenuClassification',
    component: () => import('../components/MenuClassification/index.vue'),
  }, {
    path: '/Navigation',
    name: 'Navigation',
    component: () => import('../components/Navigation/index.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
