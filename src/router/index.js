import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Budget from '../views/Budget.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/budget',
    name: 'Budget',
    component:Budget
  }
]

const router = new VueRouter({
  routes
})

export default router
