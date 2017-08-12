<template lang="pug">
#movie
  h1 Movie Discover
  .ui.grid
    .four.wide.column
      .four.wide.column
        p {{movie}}
        // components decripcion de la palicuala, y opcion a mas informacion
        // components de comentarios, y ver como sub dividir en components
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'movie',
  data(){
    return {
      id: this.$route.params.id,
      movie: {}
    }
  },
  components: { },
  computed: mapGetters([
    'getMovie'
  ]),
  mounted: function () {
  //  this.$store.dispatch('loadMovieDiscover',this.page)
    console.log(this.id);
   this.movie = this.$store.getters.getMovie(this.id);
  },
  created() {}
}
</script>
