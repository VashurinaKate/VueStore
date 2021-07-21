import Vue from 'vue'

const state = {
    cart: [],
    cartCount: 0
};
const getters = {
    CART: state => state.cart
};
const mutations = {
    'SET_CART' (state, product) {
        let found = state.cart.find(item => item.id == product.id)
        if (found) {
            found.quantity++
            found.totalPrice = found.quantity * found.totalPrice
        } else {
            state.cart.push(product)
            Vue.set(product, 'quantity', 1)
            Vue.set(product, 'totalPrice', product.price);
            state.cartCount++
        }
        // state.cartCount++
    },
    'REMOVE_FROM_CART' (state, product) {
        let index = state.cart.indexOf(product)
        if (index > -1) {
            // let item = state.cart[index];
            state.cartCount--;
            // ?????? 
            state.cart.quantity = 0;
            state.cart.totalPrice = 0;

            state.cart.splice(index, 1);
        }
    },
};
const actions = {
    INIT_CART: ({commit}, product) => {
        commit('SET_CART', product)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
