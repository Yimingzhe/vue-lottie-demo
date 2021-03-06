import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from '../views/Demo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/interactivity',
    name: 'Interactivity',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Interactivity.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
