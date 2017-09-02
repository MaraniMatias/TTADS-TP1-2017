<template lang="pug">
#buscador
  .ui.search(style="text-align:center")
    .ui.icon.input(style="width:80%")
      input#words.prompt(placeholder="Search...", type="text")(@keyup.enter="goSearchResults()").
      i.search.icon
    .results
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'search',
  props: [],
  data() {
    return{
     search: {}
    }
  },
  components: {

  },
  methods: {
    goSearchResults: function(){
      var capturedWords = document.getElementById("words").value;
      console.info(document.getElementById("words").value);
      this.$router.push( { name: 'searchResults', params: { words: capturedWords }} );
    }
  }
}
</script>

<style scoped>

</style>
