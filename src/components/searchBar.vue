<template lang="pug">
  .ui.icon.input
    input(placeholder="Search..." type="text" @keyup.enter="goSearchResults()" v-model="words")
    i.search.link.icon(@click="goSearchResults()")
  </template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'searchBar',
  data() {
    return {
      words: ''
    }
  },
  computed: {},
  components: {},
  methods: {
    ...mapActions(['loadMovieDiscover', 'searchMovies']),
    goSearchResults: function () {
      if (this.words) {
        this.$router.push({ name: 'search', params: { query: this.words } });
        this.searchMovies({ query: this.words });
        this.words = "";
      } else {
        this.$router.push({ name: 'discover' });
        this.loadMovieDiscover(this.page);
      }
    }
  }
}
</script>

<style scoped>
.ui.icon.input {
  width: 100%;
}
</style>
