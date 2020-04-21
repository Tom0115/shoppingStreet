import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Classify = () => import('../views/classify/Classify')
const ShoppingCart = () => import('../views/shoppingcart/ShoppingCart')
const User = () => import('../views/user/User')
const Detail = () => import('../views/detail/Detail')

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/shoppingCart',
    component: ShoppingCart
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
