<template lang="pug">
#movie
  .ui.grid
    .row
      .column
      movieInfo(:movie="movie")
    .row
      .column
        reviews(:movie-id="id")
          //- opcion a más informacion,ver Reviews y el resto de la info que traela API (la info adecuada :D).
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
    ...mapGetters( [ 'findMovie' ] ),
    ...mapActions( [ 'setMovieRating','gerMovieInfo' ] )
  },
  mounted: function () {
    this.movie = this.$store.getters.findMovie( this.id ) || this.$store.dispatch('gerMovieInfo', this.id).then((data)=>{
      this.movie = data;
    });
  },
  created() {}
}
</script>
