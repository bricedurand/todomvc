import { createRouter, createWebHashHistory } from 'vue-router'
import TodosView from '../views/TodosView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'all', component: TodosView },
    { path: '/active', name: 'active', component: TodosView },
    { path: '/completed', name: 'completed', component: TodosView }
  ],
})

export default router
