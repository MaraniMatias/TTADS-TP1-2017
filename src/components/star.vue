<template lang="pug">
  .ui.star.rating.massive
    i.icon(v-for="s in 5" :class="[ s <= star/2 ? 'active' : '' ]" @click="setRating(s*2)")
</template>

<script>

import { mapActions, mapState} from 'vuex';

export default{

  name: 'star',
  props: ['star','id'],
  data(){
    return{
    }
  },
  methods:{
    setRating: function (value) {
      this.$store.dispatch('setMovieRating', { movieId: this.id, value })
        .then((data) => {
          console.log("setRating", value, data);
        });
    },

    prueba: function(stars){
      console.log(stars)
    }
  }
}
</script>

<style scoped>

</style>
