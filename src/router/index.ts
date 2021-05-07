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
    path: "/kata1",
    name: "Kata1",
    component: Kata01
  },
  {
    path: "/kata2",
    name: "Kata2",
    component: Kata02
  },
  {
    path: "/kata3",
    name: "Kata3",
    component: Kata03
  },
  {
    path: "/kata4",
    name: "Kata4",
    component: Kata04
  },
  {
    path: "/kata5",
    name: "Kata5",
    component: Kata05
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
