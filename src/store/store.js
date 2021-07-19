import Vue from "vue"
import Vuex from "vuex"
import router from "../router"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: {}
    },
    mutations: {
        'SET_STORE' (state, products) {
            state.products = products;
        }
    },
    actions: {
        // gets all products
        initStore: ({commit}) => {
            axios.get('static/products.json').then(response => {
                commit('SET_STORE', response.data.products);
            })
        },
        // gets product page (by id in route)
        initProductItem: ({commit}) => {
            axios.get('static/products.json').then(response => {
                commit('SET_STORE', response.data.products.filter(data => data.id == router.currentRoute.params.id)[0]);
            })
        }
    },
    getters: {
        products: state => state.products
    }
})