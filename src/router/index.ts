import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProductInfo from '../components/ProductInfo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/ProductInfo',
    name: 'ProductInfo',
    component: ProductInfo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
