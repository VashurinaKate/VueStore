<template>
    <div>
        <div class="cart center">
            <div class="cart__items">
                <loader v-if="this.$store.state.shoppingCart.cart.loading"/>
                <div
                    v-if="this.$store.state.shoppingCart.cart.length == 0">
                    Your cart is empty
                </div>
                <cart-item
                    v-else
                    :cartItem="cartItem"
                    v-for="cartItem in this.$store.state.shoppingCart.cart"
                    :key="cartItem.id"
                    ></cart-item>
                {{ showSubTotal | formatPrice }}
                <div class="cart__bottom">
                    <button
                        class="btn btn--simple"
                        @click="clearCart">Clear cart</button>
                    <router-link
                        :to="{name : 'Catalog'}"
                        class="btn btn--simple">Continue shopping</router-link>
                </div>
            </div>
            <order-form></order-form>
        </div>
    </div>
</template>

<script>
import CartItem from './CartItem.vue'
import OrderForm from './Form.vue'
import Loader from './Loader.vue'

export default {
    name: 'Cart',
    components: { OrderForm, CartItem, Loader },
    methods: {
        clearCart() {
            this.$store.commit('CLEAR_CART', { cart: [] });
        }
    },
    computed: {
        showSubTotal() {
            let sum = 0
            for (let item of this.$store.state.shoppingCart.cart) {
                sum += item.totalPrice;
            }
            return sum
        }
    }
}
</script>
<style scoped>
</style>
