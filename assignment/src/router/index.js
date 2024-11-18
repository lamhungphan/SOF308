import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/Navbar.vue' //  component 

const routes = [
  {
    path: '/',
    name: 'Navbar',
    component: 'Navbar',

  },
  // Thêm các route khác nếu cần
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
