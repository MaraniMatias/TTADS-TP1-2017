<template lang="pug">
#app
  app-header
  .ui.main.container
    router-view
</template>

<script>
import { mapActions } from 'vuex';

import header from './components/header.vue';

export default {
  components: {
    'app-header': header
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions(['authenticationGuest'])
  },
  // en la documentacion mapea state en computed
  // cuando tengamos el login funcionando, llenar el usuario de datos
  // no se pedia pero si quieren, capas que es la respuesta de tmdb
  //computed: mapState(['usuario' ]),
  mounted() {
    this.authenticationGuest();
  }
}
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
