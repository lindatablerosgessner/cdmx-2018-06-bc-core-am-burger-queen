import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Orders from './components/Orders.vue'
import Register from './components/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
