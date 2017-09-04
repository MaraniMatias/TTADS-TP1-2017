<template lang="pug">
  div
    h3.ui.dividing.header Reviews
    .ui.comments
      .ui.centered.inline.loader(:class="{ active: !reviews.id}")
      comment(v-for="comment in reviews.results" :key="comment.id" :content="comment.content" :author="comment.author" :url="comment.url")
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
      reviews: {
        id:null,
          page:null,
          results:[]
      }
    }
  },
  components: { comment },
  computed: {
    getReviews: function () {
      this.$store.dispatch('getReviews', this.movieId)
        .then(data => { this.reviews = data });
    }
  },
  created() {},
  mounted() {
    this.getReviews;
  }
}
</script>

