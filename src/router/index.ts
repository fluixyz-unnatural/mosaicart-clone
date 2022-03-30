import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import MosaicViewer from "../views/MosaicViewer.vue";
import MessageViewer from "@/views/MessageViewer.vue";
import Credit from "@/views/Credit.vue";
import Sandbox from "@/views/Sandbox.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mosaic",
    name: "MosaicViewer",
    component: MosaicViewer,
  },
  {
    path: "/messages",
    name: "MessageViewer",
    component: MessageViewer,
  },
  {
    path: "/credit",
    name: "Credit",
    component: Credit,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
