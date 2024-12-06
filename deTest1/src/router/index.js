import EntryView from '@/views/EntryView.vue'
import NotifyView from '@/views/NotifyView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/entry',
      name: 'Entry',
      component: EntryView
    },
    {
      path: '/notification',
      name: 'Notification',
      component: NotifyView
    },
  ],
})

export default router
