<template>
    <div>
        <my-header :cartItemCount="cartItemCount"></my-header>
        <main class="products center">
            <div class="products__heading">
                <h1>Catalog</h1>
                <p>Shop for items based on what we featured in this week</p>
            </div>
            <div class="products__items">
                <catalog-item
                    v-for="product in PRODUCTS"
                    :product="product"
                    :cart="CART"
                    :key="product.id"
                    @addToCart="addToCart(product)"></catalog-item>
            </div>
        </main>
    </div>
</template>

<script>
import MyHeader from './Header.vue'
import CatalogItem from './CatalogItem'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    name: 'Catalog',
    components: { MyHeader, CatalogItem },
    methods: {
        ...mapActions([
            // 'initStore',
            // 'initCart'
            'INIT_CART'
        ]),
        addToCart(aProduct) {
            // console.log(this);
            // this.initCart(aProduct)
            this.INIT_CART(aProduct)
        }
    },
    computed: {
        ...mapGetters([
            // 'products',
            // 'cart'
            'PRODUCTS',
            'CART'
        ]),
        cartItemCount() {
            return this.CART.length || '0';
        },
        sortedProducts() {
            if (this.products.length > 0) {
                let productsArray = this.products.slice(0);
                function compare(a, b) {
                if (a.title.toLowerCase() < b.title.toLowerCase())
                    return -1;
                if (a.title.toLowerCase() > b.title.toLowerCase())
                    return 1;
                return 0;
                }
                return productsArray.sort(compare);
            }
        }
    },
    created: function() {
        // this.$store.dispatch('initStore');
        this.$store.dispatch('INIT_STORE');
    }
}
</script>

