<template lang="pug">
#movie.ui.container
  movieInfo(:movie="movie")
  reviews(:movie-id="id")
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
    ...mapActions( [ 'setMovieRating','getMovieInfo' ] )
  },
  mounted() {
    this.movie = this.$store.getters.findMovie( this.id ) || this.$store.dispatch('gerMovieInfo', this.id).then((data)=>{
      this.movie = data;
    });
  },
  created() {}
}
</script>
