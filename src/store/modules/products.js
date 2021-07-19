import router from '@/router'

const state = {
    products: {},
    cart: []
};
const getters = {
    PRODUCTS: state => state.products,
    CART: state => state.cart
};
const mutations = {
    'SET_STORE' (state, products) {
        state.products = products;
    },
    'SET_CART' (state, product) {
        state.cart.push(product)
    }
};
const actions = {
    // gets all products
    INIT_STORE: ({commit}) => {
        axios.get('static/products.json').then(response => {
            commit('SET_STORE', response.data.products);
        })
    },
    // gets product page (by id in route)
    INIT_PRODUCT_ITEM: ({commit}) => {
        axios.get('static/products.json').then(response => {
            commit('SET_STORE', response.data.products.filter(data => data.id == router.currentRoute.params.id)[0]);
        })
    },
    //get cart items
    INIT_CART: ({commit}, product) => {
        commit('SET_CART', product)
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}
