// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

require('./assets/app.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.mixin({
  methods: {
    ...mapActions([
      'INIT_CART'
    ]),
    addedToCart(product) {
      // return this.$store.state.shoppingCart.cart.find(item => item.id == product.id)
      return this.CART.find(item => item.id == product.id)
    },
    addToCart(aProduct) {
      this.INIT_CART(aProduct)
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ]),
  },
  filters: {
    formatPrice(price) {
      if (!parseInt(price)) {
        return '';
      }
      if (price > 99999) {
        var priceString = (price / 100).toFixed(2);
        var priceArray = priceString.split('').reverse();
        var index = 3;
        while (priceArray.length > index + 3) {
        priceArray.splice(index + 3, 0, ',');
        index += 4;
        }
        return '$' + priceArray.reverse().join('');
      } else {
        return '$' + (price / 100).toFixed(2);
      }
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
