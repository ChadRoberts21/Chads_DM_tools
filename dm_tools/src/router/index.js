import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/npcGenerator",
    name: "NpcGenerator",
    component: () =>
      import(/* webpackChunkName: "npcGenerator" */ "../views/NpcGenerator.vue")
  },
  {
    path: "/dice",
    name: "Dice",
    component: () => import(/* webpackChunkName: "dice" */ "../views/Dice.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
