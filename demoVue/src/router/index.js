import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Slide4 from "../components/slide4.vue";
import Slide5 from "../components/slide5.vue";
import Slide6 from "../components/slide6.vue";
import Slide7 from "../components/slide7.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/slide4", component: Slide4, name: "slide4", props: { slide: 4 } },
  { path: "/slide5", component: Slide5, name: "slide5", props: { slide: 5 } },
  { path: "/slide6", component: Slide6, name: "slide6", props: { slide: 6 } },
  { path: "/slide7", component: Slide7, name: "slide7", props: { slide: 7 } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
