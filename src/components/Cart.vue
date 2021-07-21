<template>
    <div>
        <my-header></my-header>
        <div class="cart center">
            <div class="cart__items">
                <cart-item
                    :cartItem="cartItem"
                    v-for="cartItem in this.$store.state.shoppingCart.cart"
                    :key="cartItem.id"
                    ></cart-item>

                <div class="cart__bottom">
                    {{ showSubTotal }}
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

export default {
    name: 'Cart',
    components: { MyHeader, OrderForm, CartItem },
    data() {
        return {
            subTotal: 0
        }
    },
    methods: {

    },
    computed: {
        showSubTotal() {
            for (let item of this.$store.state.shoppingCart.cart) {
                this.subTotal += item.totalPrice;
            }
            return this.subTotal
        }
    }
}
</script>
<style scoped>
</style>
