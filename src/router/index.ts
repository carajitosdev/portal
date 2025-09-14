import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: () => import('@/pages/Servicios.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('@/pages/Contacto.vue')
    }
  ]
})

export default router