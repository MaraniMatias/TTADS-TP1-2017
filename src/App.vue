<template lang="pug">
  #app.ui.main.text.container
    {{name}}
    productlist-one
    productlist-two
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
  name: 'app',
  data() {
    return {
      name:"asda"
    };
  },
  components: {
    'productlist-one': ProductListOne,
      'productlist-two': ProductListTwo
  }
}
</script>

<style>
body{
  font-family: Ubuntu;
  color: #555;
}
</style>
