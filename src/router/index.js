import { createRouter, createWebHashHistory } from 'vue-router'
import { usePostHog } from '@/composables/usePostHog'

const { posthog } = usePostHog()

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomeView.vue'),
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../pages/FavoritesView.vue'),
    },
    {
      path: '/todo',
      name: 'todos',
      component: () => import('../pages/TodoView.vue'),
    },
    {
      path: '/drank',
      name: 'drank',
      component: () => import('../pages/DrankView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutView.vue'),
    },
  ],
})



export default router
