import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'all' },
    { path: '/active', name: 'active' },
    { path: '/completed', name: 'completed' }
  ],
})

export default router
