<template lang="pug">
.ui.container
  //movieInfo(:movie="movie")
  //TODO: optener desde movi
  movieInfo(:movie="movie" :star="star")
  reviews(:movie-id="id")
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import movieInfo from './movieInformation.vue'
import reviews from './reviews.vue';
import star from './star.vue';

export default {
  name: 'movie',
  data() {
    return {
      id: this.$route.params.movieId,
      star: this.$route.params.star,
      movie: {}
    }
  },
  components: { movieInfo, reviews, star },
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
