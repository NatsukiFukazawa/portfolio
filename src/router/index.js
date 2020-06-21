import Vue from "vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue"; // added
import Home from "../views/Home.vue";
import scrap from "@/components/scrap";
import skills from "@/components/skills";
import career from "@/components/career";

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
    component: scrap,
  },
  {
    path: "/career",
    name: "career",
    component: career,
  },
  {
    path: "/skills",
    name: "skills",
    component: skills,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
