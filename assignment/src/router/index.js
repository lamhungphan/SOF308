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
  { path: "/admin", component: AdminPage, name: "admin" },
  { path: "/login", component: LoginPage, name: "login" },
  { path: "/register", component: RegisterPage, name: "register" },
  { path: "/account", component: AccountPage, name: "account" },
  { path: "/blog", component: BlogPage, name: "blog" },
  {
    path: '/blog/:id',
    name: 'BlogDetail',
    component: BlogDetail,
    props: true, // Truyền tham số dưới dạng props
    meta: {requiresAuth: true}
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//Navigation Guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = false;

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated){
    next({name: 'login'});
  } else {
    next();
  }
});

export default router;
