import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import backHome from '../backend/backHome.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../frontend/index.vue')
      },
      {
        path: '/save',
        name: 'save',
        component: () => import('../frontend/savedog.vue')
      },
      {
        path: '/purpose',
        name: 'purpose',
        component: () => import('../frontend/purpose.vue')
      },
      {
        path: '/adopt',
        name: 'adopt',
        component: () => import('../frontend/adopt.vue')
      },
      {
        path: '/adopt/favorite',
        name: 'adopt_favorite',
        component: () => import('../frontend/adopt_favorite.vue')
      },
      {
        path: '/adopt/:id',
        name: 'adopt_one',
        component: () => import('../frontend/adopt_one.vue')
      },
      {
        path: '/adopt_cart',
        name: 'adopt_cart',
        component: () => import('../frontend/adopt_cart.vue')
      },
      {
        path: '/adopt_check/:orderId',
        name: 'adopt_check',
        component: () => import('../frontend/adopt_check.vue')
      },
      {
        path: '/adopt_finish/:payId',
        name: 'adopt_finish',
        component: () => import('../frontend/adopt_finish.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../frontend/login.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'backHome',
    component: backHome,
    children: [
      {
        path: '/',
        name: 'backAdopt',
        component: () => import('../backend/backAdopt.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/admin/reserve',
        name: 'backReserve',
        component: () => import('../backend/backReserve.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/admin/coupons',
        name: 'backcoupons',
        component: () => import('../backend/backcoupons.vue'),
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
