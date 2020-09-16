import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import layout from "../layout/index.vue";

Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/login.vue")
  },
  {
    path: "/",
    name: "/",
    redirect: "/home",
    component: layout,
    children: [
      {
        path: "Home",
        name: "Home",
        meta: {
          icon: "ios-imag",
          title: "消息中心"
        },
        component: () => import("@/views/Home.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    redirect: "/about/message_page",
    component: layout,
    children: [
      {
        path: "message_page",
        name: "message_page",
        meta: {
          icon: "md-notifications",
          title: "消息中心"
        },
        component: () => import("@/views/message/index.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
/*
        全局守卫
        */
router.beforeEach((to, from, next) => {
  console.log("全局前置守卫",to);
  next();
});
router.afterEach((to, from) => {
  console.log("全局后置守卫");
});

export default router;
