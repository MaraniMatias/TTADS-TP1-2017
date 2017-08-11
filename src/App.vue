<template lang="pug">
#app
  app-header
  .ui.main.container
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
