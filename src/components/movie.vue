<template lang="pug">
#movie
  .ui.grid
    .row
      .column
      movieInfo(:movie-data="movie", :poster="movie.poster_path")
    .row
      .column
        reviews(:movie-id="id")
          //- opcion a más informacion,ver Reviews y el resto de la info que traela API (la ifo adecuada :D).
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import movieInfo from './movieInformation.vue'
import reviews from './reviews.vue';

export default {
  name: 'movie',
  data() {
    return {
      id: this.$route.params.movieId,
      movie: {}
    }
  },
  components: {movieInfo, reviews },
  methods: {
    setRating: function ( value ) {
      this.$store.dispatch( 'setMovieRating', { movieId: this.id, value } )
        .then( ( data ) => {
          console.log("setRating",value ,data );
        } );
    }
  },
  computed: {
    ...mapGetters( [ 'getMovie' ] ),
    ...mapActions( [ 'setMovieRating' ] )
  },
  mounted: function () {
    this.movie = this.$store.getters.getMovie( this.id );
  },
  created() {}
}
</script>
