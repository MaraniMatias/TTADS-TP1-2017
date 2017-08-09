<template lang="pug">
  #vuex
    product-list-one
    product-list-two
</template>

<script>
import ProductListOne from './ProductListOne.vue'
import ProductListTwo from './ProductListTwo.vue'

export default {
    name: 'vuex',
    components: {
        'product-list-one': ProductListOne,
        'product-list-two': ProductListTwo
    }
}
</script>

<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
