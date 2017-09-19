<template lang="pug">
  .ui.search(style="text-align:center")
    .ui.icon.input(style="width:80%")
      input.prompt(placeholder="Search..." type="text" @keyup.enter="goSearchResults()" v-model="words")
      i(@click="goSearchResults()").search.icon
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
  computed:{},
  components: {},
  methods: {
    ...mapActions(['loadMovieDiscover','searchMovies']),
    goSearchResults: function () {
      if (this.words) {
        this.searchMovies(this.words.replace(' ', '+'), 1);
      } else {
        thisloadMovieDiscover(this.page);
      }
    }
  }
}
</script>

<style scoped>

</style>
