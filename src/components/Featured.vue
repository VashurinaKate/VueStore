<template>
    <section class="feature">
        <div class="feature__wrap center">
            <div class="feature__media">
                <div class="feature__icon">
                    <img :src="featureSvgLorry" alt="">
                </div>
                <h2>Free Delivery</h2>
                <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
            <div class="feature__media">
                <div class="feature__icon">
                    <img :src="featureSvgSale" alt="">
                </div>
                <h2>Sales & discounts</h2>
                <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
            <div class="feature__media">
                <div class="feature__icon">
                    <img :src="featureSvgCrown" alt="">
                </div>
                <h2>Quality assurance</h2>
                <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    name: 'Featured',
    data() {
        return {
            featureSvgLorry: '/static/images/lorry.svg',
            featureSvgSale: '/static/images/sale.svg',
            featureSvgCrown: '/static/images/crown.svg'
        }
    }
}
</script>
