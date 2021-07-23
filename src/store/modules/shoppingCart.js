import Vue from 'vue'

const state = {
    cart: [],
    cartCount: 0,
    subTotal: 0
};
const getters = {
    CART: state => state.cart
};
const mutations = {
    'SET_CART' (state, product) {
        let found = state.cart.find(item => item.id == product.id)
        if (found) {
            // кнопка добалено!!!!!!
                // found.availableInventory--
                // found.quantity++
                // found.totalPrice = found.quantity * found.price

                // this.SET_QUANTITY()
                // console.log(found.availableInventory)
        } 
        // else if (found.availableInventory > 0) {}

         else {
            state.cart.push(product)
            Vue.set(product, 'quantity', 1)
            Vue.set(product, 'totalPrice', product.price)
            state.cartCount++

        }
        // state.cartCount++

        // state.subTotal = product.totalPrice
    },
    'REMOVE_FROM_CART' (state, product) {
        let index = state.cart.indexOf(product)
        if (index > -1) {
            state.cartCount--;
            state.cart.splice(index, 1);
        }
    },
    'CLEAR_CART' (state, payload) {
        state.cart = payload.cart
        state.cartCount = 0
    }
    // 'SET_SUB_TOTAL' (state, payload) {
    //     state.subTotal += payload.totalPrice
    // }
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
