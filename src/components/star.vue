<template lang="pug">
.ui.centered.grid
  .center.aligned.column
    .ui.mini.modal
      i.close.icon
      .header ¡Gracias por puntuar!
    .ui.star.rating.huge
      i.icon(v-for="s in 10" :class="[ s <= star ? 'active' : '' ]" @click="setRating(s)")
  //- Esto endria que ser el compoente de ranking, el de las estrellas y juntar esta funcionalidad.
  //- el for es una caracteristica de pug
    - for(var i = 1; i <= 10; i++){
    button(@click="setRating("+i+")") #{i}
    - }
    //- Esto es solo a modo ilutrativo, de las propiedad del objeto movie
    pre {{movieData}}
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
  computed: {},
  methods: {
    setRating: function (value) {
      this.$store.dispatch('setMovieRating', { movieId: this.id, value })
        .then((data) => {
          console.log("setRating", value, data);
          //TODO Hay que pensar en otra cosa
          $('.ui.mini.modal').modal('show');
        });
    },
  }
}
</script>

<style scoped>
.center.aligned.column {
  margin-top: 10px;
}
</style>
