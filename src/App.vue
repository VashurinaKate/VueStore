<template>
    <div id="app">
        <my-header/>
            <router-view/>
        <footer-component/>
    </div>
</template>

<script>
import MyHeader from '@/components/Header.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
    name: 'App',
    components: { MyHeader, FooterComponent }
}
</script>

<style>

</style>
