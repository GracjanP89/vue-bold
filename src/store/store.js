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
        ADD_TO_CART (state, data) {
            let isINCart = false
            state.cart.forEach(function (el) {
                if (Number(el.sku) == Number(data.sku)) {
                    isINCart = true
                }
            })
            if (!isINCart) {
                state.cart.push(data)
            }
        },
        REMOVE_FROM_CART (state, sku) {
            state.cart = state.cart.filter((el) => {
                if (!(Number(el.sku) == Number(sku))) {
                    return el
                }
            })
        },
        ADD_TO_WISHLIST (state, data) {
            let isINWish = false
            state.wishlist.forEach(function (el) {
                if (Number(el.sku) == Number(data.sku)) {
                    isINWish = true
                }
            })
            if (!isINWish) {
                state.wishlist.push(data)
            }
        },
        REMOVE_FROM_WISHLIST (state, sku) {
            state.wishlist = state.wishlist.filter((el) => {
                if (!(Number(el.sku) == Number(sku))) {
                    return el
                }
            })
        },
    },
    actions: {
        ADD_TO_CART: ({commit}, data) => {
            commit('ADD_TO_CART', data)
        },
        REMOVE_FROM_CART: ({commit}, sku) => {
            commit('REMOVE_FROM_CART', sku)
        },
        ADD_TO_WISHLIST: ({commit}, data) => {
            commit('ADD_TO_WISHLIST', data)
        },
        REMOVE_FROM_WISHLIST: ({commit}, sku) => {
            commit('REMOVE_FROM_WISHLIST', sku)
        }
    }
})
