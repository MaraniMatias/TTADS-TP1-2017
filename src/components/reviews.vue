<template lang="pug">
  div
    h3.ui.dividing.header Reviews
    .ui.comments
      .ui.centered.inline.loader(v-if="resultado" :class="{ active: !reviews.id}")
      comment(v-for="comment in reviews.results" :key="comment.id" :content="comment.content" :author="comment.author" :url="comment.url")
      h4(v-if="!resultado") No hay criticas
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import comment from './comment.vue';

export default {
  name: 'Reviews',
  props: ['movie-id'],
  data() {
    return {
      // {id, page,results: [{id, content, author, url }],total_pages, total_results}
      reviews: {},
      resultado: true
    }
  },
  components: { comment },
  computed: {
    getReviews: function () {
      this.$store.dispatch('getReviews', this.movieId)
        .then(data => {
          if(data.total_pages !== 0){
            this.reviews = data;
          }
          else {
            console.log("gola");
            this.resultado = false;
          }

        });
    }
  },
  created() {},
  mounted() {
    this.getReviews;
  }
}
</script>
