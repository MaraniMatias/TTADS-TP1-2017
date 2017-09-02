<template lang="pug">
#results.ui.container
  h1 Results of Search
  .ui.link.cards.three
    movie-card(v-for="(movie, index) in searchResults.results" :key="movie.id" :star="movie.vote_average" :title="movie.title" :poster="movie.poster_path" :overview="movie.overview" :release-date="movie.release_date" :genre-ids="movie.genre_ids" :movie-id="movie.id")
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import movieCard from './movieCard.vue';

export default {
  name: 'searchResults',
  data(){
    return { 
        wordsToSearch: this.$route.params.words,
        page: 1
    }
  },
  components: {
    movieCard
  },
  computed: mapState([
    'searchResults'
  ]),
  mounted: function () {
    this.$store.dispatch('searchMovies', this.wordsToSearch.replace(' ', '+'), this.page)
  }
}
</script>