import { createRouter, createWebHistory } from 'vue-router'
import EntryView from '@/views/Entry.vue'
import GiveBackView from '@/views/GiveBack.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'entry',
      component: EntryView,
    },
    {
      path: '/giveback',
      name: 'giveback',
      component: GiveBackView,
    },
  ],
})

export default router
