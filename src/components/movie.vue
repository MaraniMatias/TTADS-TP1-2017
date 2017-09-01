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
  components: { movieInfo, reviews },
  methods: {
    setRating: function (value) {
      this.$store.dispatch('setMovieRating', { movieId: this.id, value })
        .then((data) => {
          console.log("setRating", value, data);
        });
    }
  },
  computed: {
    ...mapGetters(['findMovie']),
    ...mapActions(['setMovieRating', 'getMovieInfo']),
    getMovie: function () {
      this.movie = this.$store.getters.findMovie(this.id) || this.$store.dispatch('getMovieInfo', this.id).then((data) => { return this.movie = data; });
    }
  },
  mounted() {
    this.getMovie;
  },
  created() {}
}
</script>
