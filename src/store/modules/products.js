import router from '@/router'

const state = {
    products: {},
    loading: true
};
const getters = {
    PRODUCTS: state => state.products
};
// const mutations = {
//     'SET_STORE' (state, products) {
//         state.products = products;
//     }
// };
const mutations = {
    'SET_STORE' (state, products) {
        state.products = products;
    }
};
const actions = {
    INIT_STORE: ({commit}) => {
        axios.get('static/products.json').then(response => {
            commit('SET_STORE', response.data.products)
            state.loading = false
        })
    },

    INIT_BESTSELLERS: ({commit}) => {
        axios.get('static/products.json').then(response => {
            commit('SET_STORE', response.data.products.filter(item => item.rating > 2))
            state.loading = false
        })
    },

    INIT_PRODUCT_ITEM: ({commit}) => {
        axios.get('static/products.json').then(response => {
            commit('SET_STORE', response.data.products.filter(data => data.id == router.currentRoute.params.id)[0]);
            state.loading = false
        })
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
