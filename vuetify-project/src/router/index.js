// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/ORDR.vue"),
      },
      {
        path: "ORDR",
        name: "ORDR",
        component: () => import("@/views/ORDR.vue"),
      },
      {
        path: "OCRD",
        name: "OCRD",
        component: () => import("@/views/OCRD.vue"),
      },
      {
        path: "OITM",
        name: "OITM",
        component: () => import("@/views/OITM.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
