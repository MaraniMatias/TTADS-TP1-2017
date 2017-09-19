<template lang="pug">
.ui.container
  search-bar
  h1 Movie Discover
  .ui.link.cards.four.stackable
    .ui.inline.loader(:class="{ active: !discover.total_pages}")
    movie-card(v-for="(movie, index) in discover.results" :key="movie.id" :star="movie.vote_average" :title="movie.title" :poster="movie.poster_path" :overview="movie.overview" :release-date="movie.release_date" :genre-ids="movie.genre_ids" :movie-id="movie.id")
  div(v-if="discover.total_pages")
    hr.ui.divider
    paginator(:pages="discover.total_pages" :page="discover.page")
</template>

<script>
import { mapState, mapActions } from 'vuex';
import searchBar from './searchBar.vue';
import movieCard from './movieCard.vue';
import paginator from './paginator.vue';

export default {
  name: 'discover',
  data() {
    return {
      page: 1
    }
  },
  components: {
    searchBar,
    movieCard,
    paginator
  },
  computed: mapState([
    'discover'
  ]),
  methods: {
    ...mapActions(['loadMovieDiscover'])
  },
  mounted() {
    this.loadMovieDiscover(this.page);
  }
}
</script>
