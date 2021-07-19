<template>
    <div>
        <my-header :cartItemCount="cartItemCount"></my-header>
        <div
            class="cart center"
            >
            <div class="cart__items">
                <cart-item
                    v-for="cartItem in cart"
                    :key="cartItem.id"
                    :cartData="cartItem"
                    ></cart-item>

                <div class="cart__bottom">
                    <a href="#" class="btn btn--simple">Clear shopping cart</a>
                    <a href="#" class="btn btn--simple">Continue shopping</a>
                </div>
            </div>
            
            <order-form></order-form>
        </div>
    </div>
</template>

<script>
import MyHeader from './Header.vue'
import CartItem from './CartItem.vue'
import OrderForm from './Form.vue'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    name: 'Cart',
  props: ['cart'],
//   data () {
//       return {
//           cart: []
//       }
//   },
    
    components: { MyHeader, OrderForm, CartItem },
    methods: {
        ...mapActions([
            // 'initStore',
            'initCart'
        ])
    },
    // computed: {
    //     ...mapGetters([
    //         'cart'
    //     ])
    // }
}
</script>
<style scoped>
</style>
