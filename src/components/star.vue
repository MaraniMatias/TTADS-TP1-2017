<template lang="pug">
<div>
.ui.centered.grid
  .center.aligned.column
    .ui.dimmer.modals.page(v-if="valueSent" :class="[{'active': valueSent},{'visible':valueSent},{'transition':valueSent}]")
      .ui.mini.modal(v-if="valueSent" :class="[{'active': valueSent},{'visible':valueSent},{'transition':valueSent}]")
        i.close.icon(v-on:click="valueSent=false")
        .header
          | ¡Gracias por puntuar!
    .ui.star.rating.huge
      i.icon(v-for="s in 10" :class="[ s <= star ? 'active' : '' ]" @click="setRating(s)" )
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
    return {
      valueSent: false
    }
  },
  methods: {
    setRating: function(value) {
      this.$store.dispatch('setMovieRating', {
          movieId: this.id,
          value
        })
        .then((data) => {
          console.log("setRating", value, data);
          this.valueSent = true;
          /*$('.ui.mini.modal')
            .modal('show');*/
        });
    }
  }
}
</script>

<style scoped>
.center.aligned.column{
  margin-top: 10px;
}
</style>
