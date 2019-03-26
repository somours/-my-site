import Vue from "vue";
import Router from "vue-router";
import Layout from "@/views/layout/index";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: () => import("../views/layout/index.vue")
    // },
    {
      path: "/",
      redirect: "dashboard",
      component: Layout,
      hidden: true,
      children: [
        {
          path: "dashboard",
          component: () => import("../views/dashboard/index"),
          name: "Dashboard",
          meta: {
            title: "dashboard",
            icon: "dashboard",
            cache: false,
            affix: true
          }
        }
      ]
    }
  ]
});
