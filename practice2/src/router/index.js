import AddPage from "@/views/AddPage.vue";
import StudentListPage from "@/views/StudentListPage.vue";
import StudentManagementPage from "@/views/StudentManagementPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: StudentListPage,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: StudentManagementPage,
    },
    {
      path: "/add",
      name: "add",
      component: AddPage,
    },
  ],
});

export default router;
