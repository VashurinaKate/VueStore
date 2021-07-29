<template>
    <main class="products center">
        <div class="products__heading">
            <h1>Bestsellers</h1>
            <p>Shop for items based on what we featured in this week</p>
        </div>
        <loader v-if="this.$store.state.products.loading"/>
        <div class="products__items">
            <catalog-item
                v-for="product in PRODUCTS.slice(0, this.bestSellersToShow)"
                :product="product"
                :cart="CART"
                :key="product.id"
                @addToCart="addToCart"></catalog-item>
        </div>
        <div class="products__bottom">
            <button @click="browseMoreProducts" class="btn btn--main">Browse All Product</button>
        </div>
    </main>
</template>

<script>
import CatalogItem from './CatalogItem.vue'
import Loader from './Loader.vue'

export default {
    name: 'Bestsellers',
    components: { CatalogItem, Loader },
    data() {
        return {
            bestSellersToShow: 3
        }
    },
    methods: {
        browseMoreProducts() {
            this.bestSellersToShow += 3;
        }
    },
    created: function() {
        this.$store.dispatch('INIT_BESTSELLERS');
    }
}
</script>
