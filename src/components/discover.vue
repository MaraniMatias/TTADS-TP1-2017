<template lang="pug">
#discover.ui.container
  h1 Movie Discover
  .ui.comments
    .ui.centered.inline.loader(:class="{ active: !discover.total_pages}")
  .ui.link.cards.three
    movie-card(v-for="(movie, index) in discover.results" :key="movie.id" :star="movie.vote_average" :title="movie.title" :poster="movie.poster_path" :overview="movie.overview" :release-date="movie.release_date" :genre-ids="movie.genre_ids" :movie-id="movie.id")
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import movieCard from './movieCard.vue';

export default {
  name: 'discover',
  data(){
    return {
      page: 1
    }
  },
  components: {
    movieCard
  },
  computed: mapState([
    'discover'
  ]),
  mounted: function () {
    this.$store.dispatch('loadMovieDiscover',this.page)
  }
}
</script>
