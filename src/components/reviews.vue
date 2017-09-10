<template lang="pug">
  div
    h3.ui.dividing.header Reviews
    .ui.comments
      .ui.centered.inline.loader(:class="{ active: loading}")
      comment(v-for="comment in reviews.results" :key="comment.id" :content="comment.content" :author="comment.author" :url="comment.url")
      // this movie has no review
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import comment from './comment.vue';

export default {
  name: 'Reviews',
  props: ['movie-id'],
  data() {
    return {
      loading: true,
      // {id, page,results: [{id, content, author, url }],total_pages, total_results}
      reviews: { id: null, page: null, results: [] }
    }
  },
  components: { comment },
  methods: {},
  computed: {
    getReviews: function () {
      this.$store.dispatch('getReviews', this.movieId)
        .then(data => {
          this.loading = false;
          this.reviews = data;
        });
    }
  },
  created() {},
  mounted() {
    this.getReviews;
  }
}
</script>
