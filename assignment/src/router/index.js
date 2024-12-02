import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AdminPage from "../views/AdminPage.vue";
import LoginPage from "../views/Login.vue";
import RegisterPage from "../views/Register.vue"
import AccountPage from "../views/Account.vue"
import BlogPage from "../views/Blog.vue"
import BlogDetail from "../views/BlogDetail.vue"

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/admin", component: AdminPage, name: "admin", meta: { requiresAuth: true } },
  { path: "/account", component: AccountPage, name: "account", meta: { requiresAuth: true } },
  { path: "/blog", component: BlogPage, name: "blog", meta: { requiresAuth: true } },
  {
    path: '/blog/:id',
    name: 'BlogDetail',
    component: BlogDetail,
    props: true, // Truyền tham số dưới dạng props
  },
  { path: "/login", component: LoginPage, name: "login" },
  { path: "/register", component: RegisterPage, name: "register" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//Navigation Guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('loggedInUser'));

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'login' });
  } else if ((to.name === 'login' || to.name === 'register') && isAuthenticated) {
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
