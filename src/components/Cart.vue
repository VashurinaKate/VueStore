<template>
    <div>
        <div class="cart center">
            <div class="cart__items">
                <loader v-if="this.$store.state.shoppingCart.cart.loading"/>
                <div class="empty-cart"
                    v-if="CART.length == 0">
                    Your cart is empty
                </div>
                <cart-item
                    v-else
                    :cartItem="cartItem"
                    v-for="cartItem in CART"
                    :key="cartItem.id"
                    ></cart-item>
                {{ calcSubTotal | formatPrice }}
                <div class="cart__bottom">
                    <button
                        class="btn btn--simple"
                        v-if="CART.length"
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
        calcSubTotal() {
            let subTotal = 0
            for (let item of this.$store.state.shoppingCart.cart) {
                subTotal += item.totalPrice;
            }
            this.$store.commit('SET_SUB_TOTAL', subTotal);
            return subTotal
        }
    }
}
</script>
<style scoped>
.empty-cart {
    color: #F16D7F;
    text-transform: uppercase;
    margin-bottom: 30px;
}
</style>
