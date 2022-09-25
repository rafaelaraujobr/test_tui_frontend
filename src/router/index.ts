import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    component: () =>
      import(/* webpackChunkName: "about" */ "../layouts/LayoutDefault.vue"),
    children: [
      { path: "", redirect: "hotels" },
      {
        path: "hotels",
        name: "hotels",
        component: () =>
          import(/* webpackChunkName: "about" */ "../pages/HotelsPage.vue"),
      },
      {
        path: "hotel/:id",
        name: "hotel",
        props: true,
        component: () =>
          import(/* webpackChunkName: "about" */ "../pages/HotelPage.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/AboutPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
