<template lang="pug">
.ui.container
  movieInfo(:movie="movie")
  reviews(:movie-id="id")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
    ...mapActions(['getMovieInfo']),
    getMovie: function () {
      this.movie = this.findMovie(this.id) || this.getMovieInfo(this.id).then((data) => { return this.movie = data; });
    }
  },
  computed: {
    ...mapGetters(['findMovie'])
  },
  mounted() {
    this.getMovie();
  },
  created() {}
}
</script>
