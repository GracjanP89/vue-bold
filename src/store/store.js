import dataProducts from '../../static/data.json'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    wishlist: [],
    cart: [],
    products: dataProducts.products
}
export default new Vuex.Store({
    state,
    mutations: {
        ADD_REMOVE_TO_CART (state, data) {
            let isINCart = false
            state.cart.forEach(function(el){
                if(Number(el.sku) == Number(data.sku)) {
                    isINCart = true
                }
            })
            if(!isINCart){
                state.cart.push(data)
            }
        },
        ADD_REMOVE_TO_WISHLIST (state, data) {
            let isINWish = false
            state.wishlist.forEach(function(el){
                if(Number(el.sku) == Number(data.sku)) {
                    isINWish = true
                }
            })
            if(!isINWish){
                state.wishlist.push(data)
            }
        }
    },
    actions: {
        ADD_REMOVE_TO_CART: ({commit}, data) => {
            commit('ADD_REMOVE_TO_CART', data)
        },
        ADD_REMOVE_TO_WISHLIST: ({commit}, data) => {
            commit('ADD_REMOVE_TO_WISHLIST', data)
        }
    }
})
