<template>
    <section class="promo center">
        <div class="promo__img">
            <img class="promo__photo" :src="promoImage" alt="promo">
        </div>
        <div class="promo__text">
            <div class="promo__content">
                <h1 class="promo__h1">The Brand</h1>
                <h2 class="promo__h2">Of Luxerious <span class="promo__h2__span">Fashion</span></h2>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Promo',
    data() {
        return {
            promoImage: '/static/images/promo.png',
        }
    }
}
</script>
