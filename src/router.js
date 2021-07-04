import Vue from "vue";
import Router from "vue-router";

const store = require('./store/store').default

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/public",
      component: () => import("@/views/pages/Index"),
      children: [
        {
          name: "Home",
          path: "home",
          component: () => import("@/views/pages/public/Home"),
          // props: route => ({ page: route.query.page, limit: route.query.limit })
        },
        {
          name: "Detail",
          path: "detail",
          component: () => import("@/views/pages/public/Detail")
        },
        {
          name: "Login",
          path: "login",
          component: () => import("@/views/pages/Login")
        },
        {
          name: "Logout",
          path: "logout",
          component: () => import("@/views/pages/Logout")
        },
        {
          name: "Register",
          path: "register",
          component: () => import("@/views/pages/Register")
        },
        {
          name: "Search",
          path: "search",
          component: () => import("@/views/pages/Search")
        }
      ]
    },
    {
      path: "/",
      component: () => import("@/views/dashboard/Index"),
      children: [
        // Dashboard
        {
          name: "Dashboard",
          path: "",
          component: () => import("@/views/dashboard/Dashboard")
        },
        // User
        {
          name: "UserList",
          path: "users/list",
          component: () => import("@/views/dashboard/users/List")
        },
        {
          name: "User Add",
          path: "users/add",
          component: () => import("@/views/dashboard/users/Add")
        },
        {
          name: "UserUpdate",
          path: "users/update/:userId",
          component: () => import("@/views/dashboard/users/Update")
        },
        // Category
        {
          name: "Category List",
          path: "categories/list",
          component: () => import("@/views/dashboard/categories/List")
        },
        {
          name: "Category Add",
          path: "categories/add",
          component: () => import("@/views/dashboard/categories/Add")
        },
        {
          name: "CategoryUpdate",
          path: "categories/update/:categoryId",
          component: () => import("@/views/dashboard/categories/Update")
        },
      ]
    },
    {
      path: "*",
      component: () => import("@/views/pages/Index"),
      children: [
        {
          name: "404 Error",
          path: "",
          component: () => import("@/views/pages/Error")
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const token = store.getters.GET_TOKEN;
  if (to.name === 'Register') {
    next()
  } else if (to.name !== 'Login' && !token) {
    next({ name: 'Login' })
  } else if (to.name === 'Login' && token) {
    next({ name: 'Home' })
  } else next()
})

export default router;
