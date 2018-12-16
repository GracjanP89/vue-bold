import Vue from 'vue'

import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tasks from '@/components/Tasks'
import Products from '@/components/Products'
import Cart from '@/components/Cart'
import Wishlist from '@/components/Wishlist'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/tasks',
        name: 'Lista zadań',
        component: Tasks
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/wishlist',
        name: 'Wishlist',
        component: Wishlist
    }
    ]
})
