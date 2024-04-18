import { createRouter, createWebHashHistory } from "vue-router";

// 静态路由
export const routes = [
  {
    path: "/",
    component: () => import("@/pages/login/index.vue"),
  },
  {
    path: "/login",
    component: () => import("@/pages/login/index.vue"),
  },
  {
    path: "/layout",
    component: () => import("@/layout/index.vue"),
  },
];

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
