<<template>
<div class="ui centered card">
  <div class="image">
    <img src="https://api.adorable.io/avatars/285/">
  </div>
  <div class="content">
    <a class="header">{{usuarioLogin.user.username}}</a>
    <div class="meta">
      <span class="date">User ID: {{usuarioLogin.user.id}}</span>
    </div>
    <div class="description">Nombre: {{usuarioLogin.user.name}} </div>
    <div class="description">Contenido adulto: {{usuarioLogin.user.include_adult}} </div>
  </div>
  <div class="ui bottom attached button" @click="cerrarSesion()"><i class="sign out icon"></i> Cerrar Sesión</div>
</div>
</template>

<script>
import { mapState,  mapActions } from 'vuex';

export default {
    computed: mapState([
    'usuarioLogin'
  ]),
  methods: {
    ...mapActions(['cerrarSesionUsuario']),
    cerrarSesion: function(){
      this.cerrarSesionUsuario();
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>

</style>
