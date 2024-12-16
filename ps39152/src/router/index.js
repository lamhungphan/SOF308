import { createRouter, createWebHistory } from 'vue-router'
import EntryView from '@/views/Entry.vue'
import UpSalaryView from '@/views/UpSalary.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'entry',
      component: EntryView
    },
    {
      path: '/upsalary',
      name: 'upsalary',
      component: UpSalaryView
    },
  ],
})

export default router
