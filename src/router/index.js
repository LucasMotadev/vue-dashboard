import Vue from "vue";
import VueRouter from "vue-router";
import allRouters from "./modules";

Vue.use(VueRouter);

const routes = [
  ...allRouters
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});



export default router;
