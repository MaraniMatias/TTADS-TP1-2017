<template lang="pug">
#buscador
  .ui.search(style="text-align:center")
    .ui.icon.input(style="width:80%")
      input.prompt(placeholder="Search...", type="text")(@keyup.enter="goSearchResults()")
      i.search.icon
    .results
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'search',
  props: [ ],
  data() {
    return{
     search: {}
    }
  },
  components: {

  },
  methods: {
    goSearchResults: function(){
      this.$router.push( { name: 'searchResults'} );
    }
  }
}
</script>

<style scoped>
</style>
