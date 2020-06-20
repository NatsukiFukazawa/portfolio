import Vue from "vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue"; // added
import Home from "../views/Home.vue";
import test1 from "@/components/test1";
import test2 from "@/components/test2";
import test3 from "@/components/test3";

Vue.use(VueRouter);
Vue.use(BootstrapVue); // added

import "bootstrap/dist/css/bootstrap.css"; // added
import "bootstrap-vue/dist/bootstrap-vue.css"; // added

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/scrap",
    name: "scrap",
    component: test1,
  },
  {
    path: "/career",
    name: "career",
    component: test2,
  },
  {
    path: "/skills",
    name: "skills",
    component: test3,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
