import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Headphones from '../views/Headphones.vue'
import Speakers from '../views/Speakers.vue'
import Earphones from '../views/Earphones.vue'
import Products from '../views/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/headphones',
    name: 'Headphones',
    component: Headphones
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: Speakers
  },
  {
    path: '/earphones',
    name: 'Earphones',
    component: Earphones
  },
  {
    path: '/products/:category',
    name: 'Products',
    component: Products
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
