<template lang="pug">
#app.ui.main.text.container
  app-header
  router-view
</template>

<script>
import header from './components/header.vue';

export default {
  components: {
    'app-header': header
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
