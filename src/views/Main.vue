<template>
    <div>
        <promo />
        <sale />
        <!-- <catalog>

        </catalog> -->
        <bestsellers>

        </bestsellers>
        <featured />
        <subscribe-form />
    </div>
</template>

<script>
import Promo from '@/components/Promo.vue'
import Sale from '@/components/Sale.vue'
// import Catalog from '@/components/Catalog.vue'
import Bestsellers from '@/components/Bestsellers.vue'
import SubscribeForm from '@/components/SubscribeForm.vue'
import Featured from '@/components/Featured.vue'

export default {
    name: 'imain',
    components: { Promo, Sale, SubscribeForm, Featured, Bestsellers },
    // data() {
    //     return
    // }
    methods: {
        browseMorePrpducts() {
            console.log(this.$store.state.products.products.length)
            // for (let i = 0; i < 2; i ++) {

            // }
            // this.$store.dispatch('INIT_STORE', this.$store.state.products.products.length);    
        }
    },
    created: function() {
        // this.$store.dispatch('INIT_STORE', 3);
    }
}
</script>
