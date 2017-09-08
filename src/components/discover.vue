<template lang="pug">
#discover.column(is-half)
  h1 Movie Discover
  hr.ui.divider
  .ui.link.cards
    movie-card(v-for="(movie, index) in discover.results" :movie-id="movie.id" :star="movie.vote_average" :title="movie.title" :poster="movie.poster_path" :overview="movie.overview" :release-date="movie.release_date" :genre-ids="movie.genre_ids")
  hr.ui.divider
  paginator(:pages="discover.total_pages" :page="discover.page")
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import movieCard from './movieCard.vue';
import paginator from './paginator.vue'

export default {
  name: 'discover',
  data(){
    return {
      page: 1
    }
  },
  components: {
    movieCard,
    paginator
  },
  computed: mapState([
    'discover'
  ]),
  mounted: function () {
    this.$store.dispatch('loadMovieDiscover',this.page)
  }
}
</script>
