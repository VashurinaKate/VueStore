import router from '@/router'

const state = {
    products: {}
};
const getters = {
    PRODUCTS: state => state.products
};
const mutations = {
    'SET_STORE' (state, products) {
        state.products = products;
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
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
