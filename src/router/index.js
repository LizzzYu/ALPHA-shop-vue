import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: App,
  },
  {
    path: '/main/shippingAdress',
    name: 'shippingAdress',
    component: () => import('../views/PaymentShippingAddressForm.vue')
  },
  {
    path: '/main/shippingMethods',
    name: 'shippingMethods',
    component: () => import('../views/PaymentShippingInfoForm.vue')
  },
  {
    path: '/main/shippingInfo',
    name: 'shippingInfo',
    component: () => import('../views/PaymentShippingInfoForm.vue')
  },
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
