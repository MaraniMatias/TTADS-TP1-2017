<template lang="pug">
#movie
  h1 Movie {{movie.title}} ({{movie.release_date}})
  .ui.grid
    .row
      .column
        //- components decripcion de la palicuala , ver como sub dividir en components
        p overview {{movie.overview}}
        P User score {{movie.vote_average}}
        p popularity {{movie.popularity}}
        //- Esto endria que ser el compoente de ranking, el de las estrellas y juntar esta funcionalidad.
        //- el for es una caracteristica de pug
        - for(var i = 1; i <= 10; i++){
          button(@click="setRating("+i+")") #{i}
        - }
        //- Esto es solo a modo ilutrativo, de las propiedad del objeto movie
        pre {{movie}}
    .row
      .column
        reviews(:movie-id="id")
          //- opcion a más informacion,ver Reviews y el resto de la info que traela API (la ifo adecuada :D).
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import reviews from './reviews.vue';

export default {
  name: 'movie',
  data() {
    return {
      id: this.$route.params.movieId,
      movie: {}
    }
  },
  components: { reviews },
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
