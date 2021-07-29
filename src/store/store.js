import Vue from "vue"
import Vuex from "vuex"
import products from "./modules/products"
import shoppingCart from "./modules/shoppingCart"

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        products,
        shoppingCart
    }
})
