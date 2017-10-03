<template lang="pug">
div
  .ui.inverted.menu.descktop
    router-link.item.teal(:to="{ name: 'discover' }", exact='') Home
    router-link.item.teal(:to="{ name: 'docs' }", exact='') Docs
    a.item.teal(href='https://github.com/MaraniMatias/tp-2017') Repo Git
    .item.search-bar
      search-bar
    .right.menu
      template(v-if='!usuarioLogin.user.username')
        router-link.item(:to="{ name: 'login' }" exact='')
          button.ui.button
            i.sign.in.icon
            | Iniciar Sesión
      template(v-else)
        .ui.simple.dropdown.item
          i.user.icon
          template(v-if='usuarioLogin.user.name') {{usuarioLogin.user.name}}
          template(v-else='') {{usuarioLogin.user.username}}
          i.dropdown.icon
          .menu
            router-link.item.teal(:to="{ name: 'userProfile' }" exact='')
              i.address.card.outline.icon
              | Mi Perfil
            .item(@click='cerrarSesion()')
              i.sign.out.icon
              | Cerrar Sesion
  .ui.icon.inverted.menu.movil
    router-link.item.teal(:to="{ name: 'discover' }" exact='')
      i.home.icon
    router-link.item.teal(:to="{ name: 'docs' }" exact='')
      i.book.icon
    a.item.teal(href='https://github.com/MaraniMatias/tp-2017')
      i.github.icon
    .right.menu
      router-link.item.teal(:to="{ name: 'login' }" exact='')
        i.user.icon
  .ui.container
    .ui.grid
      .wide.column
        search-bar
</template>

<script>
import { mapState, mapActions } from 'vuex';
import searchBar from './searchBar.vue';

export default {
  components: {
    searchBar
  },
  computed: mapState([
    'usuarioLogin'
  ]),
  methods: {
    ...mapActions(['cerrarSesionUsuario']),
    cerrarSesion: function () {
      this.cerrarSesionUsuario();
    }
  }
}
</script>

<style scoped>
.ui.menu {
  margin-top: 0px;
  border-radius: 0px;
}

/*
.ui.inverted.menu .router-link-active {
  background-color: #00b5ad;
  border-radius: 0px;
 }
*/

.item.search-bar {
  margin: auto;
  flex: auto;
}

@media only screen and (max-device-width: 660px) {
  .ui.inverted.menu.descktop {
    display: none;
  }
}

@media only screen and (min-device-width: 661px) {
  .movil {
    display: none;
  }
  .ui.container {
    display: none;
  }
}
</style>
