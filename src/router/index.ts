import { createRouter, createWebHistory } from "vue-router";
import HomeRoute from "@/pages/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeRoute,
    },
  ],
});

export default router;
