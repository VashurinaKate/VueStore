<template>
    <main class="products center">
        <div class="products__heading">
            <h1>Catalog</h1>
            <p>Shop for items based on what we featured in this week</p>
        </div>
        <loader v-if="this.$store.state.products.loading"/>
        <div class="products__items">
            <catalog-item
                v-for="product in sortedProducts"
                :product="product"
                :cart="CART"
                :key="product.id"
                @addToCart="addToCart"></catalog-item>
        </div>
    </main>
</template>

<script>
import CatalogItem from './CatalogItem.vue'
import Loader from './Loader.vue'

export default {
    name: 'Catalog',
    components: { CatalogItem, Loader },
    methods: {

    },
    computed: {
        sortedProducts() {
            if (this.PRODUCTS.length > 0) {
                let productsArray = this.PRODUCTS.slice(0);
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
        this.$store.dispatch('INIT_STORE');
    }
}
</script>

