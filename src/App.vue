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
  methods: {},
  // en la documentacion mapea state en computed
  // cuando tengamos el login funcionando, llenar el usuario de datos
  // no se pedia pero si quieren, capas que es la respuesta de tmdb
  //computed: mapState(['usuario' ]),
  mounted: function () {
    this.$store.dispatch('authenticationGuest')
  }
}
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
