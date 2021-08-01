<template>
    <div id="app">
        <my-header/>
            <router-view/>
        <subscribe-form />
        <footer-component/>
    </div>
</template>

<script>
import MyHeader from '@/components/Header.vue'
import SubscribeForm from '@/components/SubscribeForm.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    name: 'App',
    components: { MyHeader, SubscribeForm, FooterComponent }
}
</script>

<style>

</style>
