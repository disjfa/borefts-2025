import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomeView.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../pages/FavoritesView.vue')
    },
    {
      path: '/likes',
      name: 'likes',
      component: () => import('../pages/LikesView.vue')
    }
  ],
})

export default router
