import { createRouter, createWebHashHistory } from "vue-router";

// 静态路由
export const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/pages/login/index.vue"),
  },
  {
    path: "/layout",
    redirect: "/layout/index",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "index",
        component: () => import("@/pages/index/index.vue"),
      },
    ],
  },
];

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
