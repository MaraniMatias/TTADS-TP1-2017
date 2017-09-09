<template lang="pug">
<div>
.ui.mini.modal
  i.close.icon
  .header
    | ¡Gracias por puntuar!
.ui.star.rating.massive
  i.icon(v-for="s in 5" :class="[ s <= star/2 ? 'active' : '' ]" @click="setRating(s*2)")
</div>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex';

export default {

  name: 'star',
  props: ['star', 'id'],
  data() {
    return {}
  },
  methods: {
    setRating: function(value) {
      this.$store.dispatch('setMovieRating', {
          movieId: this.id,
          value
        })
        .then((data) => {
          console.log("setRating", value, data);
          $('.ui.mini.modal')
            .modal('show');
        });
    },
  }
}
</script>

<style scoped>

</style>
