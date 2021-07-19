<template>
    <div>
        <my-header></my-header>
        <div class="cart center">
            <div class="cart__items">
                <cart-item
                    :cartData="cartItem"
                    v-for="cartItem in CART"
                    :key="cartItem.id"
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
    components: { MyHeader, OrderForm, CartItem },
    methods: {
        ...mapActions([
            'INIT_CART'
        ])
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    }
}
</script>
<style scoped>
</style>
