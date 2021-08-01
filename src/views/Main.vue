<template>
    <div>
        <promo />
        <sale />
        <bestsellers />
        <featured />
    </div>
</template>

<script>
import Promo from '@/components/Promo.vue'
import Sale from '@/components/Sale.vue'
import Bestsellers from '@/components/Bestsellers.vue'
import Featured from '@/components/Featured.vue'

export default {
    name: 'imain',
    components: { Promo, Sale, Featured, Bestsellers }
}
</script>
