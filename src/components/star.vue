<template lang="pug">
div
  .ui.grid
    .center.aligned.column
      .ui.star.rating.huge
        i.icon(v-for="s in 10" :class="[ s <= star ? 'active' : '' ]" @click="setRating(s)" )
  v-modal(size="mini" v-if="valueSent" @close="valueSent=false")
    div(slot="header") The Movie DB
    p {{rtaTMDB}}
    div(slot="actions")
      .ui.button(@click="valueSent=false") OK
</template>

<script>
import { mapActions, mapState } from 'vuex';
import modal from './modal.vue';

export default {
  name: 'star',
  props: ['star', 'id'],
  data() {
    return {
      rtaTMDB: '',
      valueSent: false
    }
  },
  components: { 'v-modal': modal },
  methods: {
    setRating: function (value) {
      this.$store.dispatch('setMovieRating', { movieId: this.id, value })
        .then((data) => {
          this.rtaTMDB = data.status_code === 1 ? 'Thank you for rating!' : data.status_message;
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
