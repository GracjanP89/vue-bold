import Vue from 'vue'

import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tasks from '@/components/Tasks'
import Firebase from '@/components/Firebase'
import Cart from '@/components/Cart'

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
        path: '/firebase',
        name: 'Firebase',
        component: Firebase
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    }
    ]
})
