import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from '../views/HomePage.vue';
import AllCaracter from '../views/AllCaracter.vue'
import DeadCaracter from '../views/DeadCaracter.vue'
import LiveCaracter from '../views/LiveCaracter.vue'
import FemaleCaracter from '../views/FemaleCaracter.vue'
import MaleCaracter from '../views/MaleCaracter.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/allcaracter",
    component: AllCaracter,
  },
  {
    path: "/deadcaracter",
    component: DeadCaracter,
  },
  {
    path: "/livecaracter",
    component: LiveCaracter,
  },
  {
    path: "/femalecaracter",
    component: FemaleCaracter,
  },
  {
    path: "/malecaracter",
    component: MaleCaracter,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
