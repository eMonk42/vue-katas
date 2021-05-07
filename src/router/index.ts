import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Kata01 from "../views/Kata01.vue";
import Kata02 from "../views/Kata02.vue";
import Kata03 from "../views/Kata03.vue";
import Kata04 from "../views/Kata04.vue";
import Kata05 from "../views/Kata05.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/kata01",
    name: "Kata01",
    component: Kata01
  },
  {
    path: "/kata02",
    name: "Kata02",
    component: Kata02
  },
  {
    path: "/kata03",
    name: "Kata03",
    component: Kata03
  },
  {
    path: "/kata04",
    name: "Kata04",
    component: Kata04
  },
  {
    path: "/kata05",
    name: "Kata05",
    component: Kata05
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
