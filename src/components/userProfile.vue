<template>
<div class="ui centered card">
  <div class="image">
    <img :src="usuario.getAvatar()">
  </div>
  <div class="content">
    <a class="header">{{usuario.username}}</a>
    <div class="meta">
      <span class="date">User ID: {{usuario.id}}</span>
    </div>
    <div class="description">Nombre: {{usuario.name}} </div>

    <div class="description">
      <div v-if="!usuario.include_adult">
        Contenido adulto: <i class="large toggle icon off"></i>
      </div>
      <div v-else>
        Contenido adulto: <i class="large toggle icon on"></i>
      </div>
    </div>
  </div>
  <div class="ui bottom attached button" @click="cerrarSesion()"><i class="sign out icon"></i> Cerrar Sesión</div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState([
    'usuario'
  ]),
  methods: {
    ...mapActions(['cerrarSesionUsuario']),
    cerrarSesion: function () {
      this.cerrarSesionUsuario();
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>

</style>
