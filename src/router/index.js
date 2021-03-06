import Vue from 'vue';
import VueRouter from 'vue-router';
// import App from '../App.vue';
import Payment from '../views/Payment.vue';
// import ShoppingCart from '../views/ShoppingCart.vue'
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/main',
  },
  // {
  //   path: '/main',
  //   name: 'main',
  //   component: App,
    // children: [
    //   {
    //     path: '/main',
    //     name: 'form',
    //     // redirect: '/main/form/shippingAddress',
    //     component: Payment,
    //     children: [
    //       {
    //         path: 'shippingAddress',
    //         name: 'shippingAddress',
    //         component: () => import('../views/PaymentShippingAddressForm.vue'),
    //       },
    //       {
    //         path: 'shippingMethods',
    //         name: 'shippingMethods',
    //         component: () => import('../views/PaymentShippingInfoForm.vue'),
    //       },
    //       {
    //         path: 'shippingInfo',
    //         name: 'shippingInfo',
    //         component: () => import('../views/PaymentShippingInfoForm.vue'),
    //       },
    //     ],
    //   },
    //   {
    //     path: '/form',
    //     name: 'cart',
    //     component: ShoppingCart,
    //   }
    // ],
  // },
  {
    path: '/main',
    name: 'form',
    redirect: '/main/shippingAddress',
    component: Payment,
    children: [
      {
        path: 'shippingAddress',
        name: 'shippingAddress',
        component: () => import('../views/PaymentShippingAddressForm.vue'),
      },
      {
        path: 'shippingMethods',
        name: 'shippingMethods',
        component: () => import('../views/PaymentShippingMethodsForm.vue'),
      },
      {
        path: 'shippingInfo',
        name: 'shippingInfo',
        component: () => import('../views/PaymentShippingInfoForm.vue'),
      },
    ],
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound,
  },
];

const router = new VueRouter({
  // linkExactActiveClass: 'active',
  routes,
});

export default router;
