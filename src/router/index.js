import Vue from 'vue'
import Router from 'vue-router'
import Cart from '@/components/Cart'
import Main from '@/components/Main'
import Product from '@/components/Product'
import EditProduct from '@/components/EditProduct'

Vue.use(Router)

export default new Router({
  // mode: history,
  routes: [
    {
      path: '/',
      name: 'iMain',
      component: Main,
      props: true
    },
    {
      path: '/product/:id',
      name: 'Id',
      component: Product,
      props: true,
      children: [
        {
          path: 'edit',
          name: 'Edit',
          component: EditProduct,
          props: true
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      props: true
    },
    {
      path: '*', // захватывает любые адреса (подстановочный маршрут)
      redirect: '/' // перенаправляет на / (перенапрвление)
    }
  ]
})
