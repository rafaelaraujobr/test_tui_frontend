import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    component: () =>
      import(/* webpackChunkName: "about" */ "../layouts/LayoutDefault.vue"),
    children: [
      { path: "", redirect: "home" },
      {
        path: "home",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
