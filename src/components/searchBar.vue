<template lang="pug">
  .ui.search(style="text-align:center")
    .ui.icon.input(style="width:80%")
      input.prompt(placeholder="Search..." type="text" @keyup.enter="goSearchResults()" v-model="words")
      i.search.icon
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'searchBar',
  props: [],
  data() {
    return {
      words: ''
    }
  },
  computed: mapState([
    'searchResults'
  ]),
  components: {},
  methods: {
    goSearchResults: function () {
      if (this.words) {
        this.$store.dispatch('searchMovies', this.words.replace(' ', '+'), 1);
      } else {
        this.$store.dispatch('loadMovieDiscover', this.page);
      }
    }
  }
}
</script>

<style scoped>

</style>
