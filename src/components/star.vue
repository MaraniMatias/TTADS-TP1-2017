<template lang="pug">
.ui.centered.grid
  .center.aligned.column
    .ui.dimmer.modals.page(:class="[{'active': valueSent},{'visible':valueSent},{'transition':valueSent}]")
      .ui.mini.modal.active.visible(v-if="valueSent")
        i.close.icon(v-on:click="valueSent=false")
        .header ¡Gracias por puntuar!
    .ui.star.rating.huge
      i.icon(v-for="s in 10" :class="[ s <= star ? 'active' : '' ]" @click="setRating(s)" )
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
    return {
      valueSent: false
    }
  },
  computed: {},
  methods: {
    setRating: function (value) {
      this.$store.dispatch('setMovieRating', { movieId: this.id, value })
        .then((data) => {
          console.log("setRating", value, data);
          this.valueSent = true;
        });
    }
  }
}
</script>

<style scoped>
.center.aligned.column {
  margin-top: 10px;
}
</style>
