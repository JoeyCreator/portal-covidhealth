import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import Social from "../components/Social";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Social",
    name: "Social",
    component: Social
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
