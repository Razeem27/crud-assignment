import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/HomeView.vue";
import Create from "../pages/CreateView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/create",
    name: "create",
    component: Create,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});

export default router;
