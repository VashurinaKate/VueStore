<template>
    <section class="sale center">
        <div class="sale__top">
            <div
                class="sale__item sale__item_1">
                <img :src="saleWomenImg" alt="">
                <p class="sale__text">30% Off</p>
                <h3 class="sale__heading">For Women</h3>
            </div>
            <div class="sale__item sale__item_2">
                <img :src="saleMenImg" alt="">
                <p class="sale__text">HOT DEAL</p>
                <h3 class="sale__heading">For Men</h3>
            </div>
            <div class="sale__item sale__item_3">
                <img :src="saleKidImg" alt="">
                <p class="sale__text">NEW ARRIVALS</p>
                <h3 class="sale__heading">For Kids</h3>
            </div>

        </div>
        <div class="sale__bottom">
            <div class="sale__item sale__bottom__item">
                <img :src="saleAccessoriesImg" alt="">
                <p class="sale__text">LUXIROUS & TRENDY</p>
                <h3 class="sale__heading">ACCESORIES</h3>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Sale',
    data() {
        return {
            saleMenImg: '/static/images/men.jpg',
            saleWomenImg: '/static/images/women.jpg',
            saleKidImg: '/static/images/kid.jpg',
            saleAccessoriesImg: '/static/images/accesories.jpg'
        }
    }
}
</script>

<style>
.sale__item_1 {
  /* background-image: url({{saleWomenImg}}); */

}
.sale__item_2 {
  background-image: url({{saleMenImg}});
}
.sale__item_3 {
  background-image: url(${{saleKidImg}});
}
.sale__bottom {
  margin-top: 30px;
  background-image: url(${saleAccessoriesImg});
}
</style>