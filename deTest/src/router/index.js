import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Entry.vue'
import DetailView from '../views/Detail.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView,
    },
  ],
})

export default router
