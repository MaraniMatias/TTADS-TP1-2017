<template lang="pug">
#movie
  h1 Movie {{movie.title}} ({{movie.release_date}})
  .ui.grid
    .four.wide.column
      .four.wide.column
        // components decripcion de la palicuala , ver como sub dividir en components
        p overview {{movie.overview}}
        P User score {{movie.vote_average}}
        p popularity {{movie.popularity}}
        pre {{movie}}
        // opcion a más informacion,ver Reviews y el resto de la info que traela API (la ifo adecuada :D).
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'movie',
  data(){
    return {
      id: this.$route.params.movieId,
      movie: {}
    }
  },
  components: { },
  computed: mapGetters([
    'getMovie'
  ]),
  mounted: function () {
    this.movie = this.$store.getters.getMovie(this.id);
  },
  created() { }
}
</script>
