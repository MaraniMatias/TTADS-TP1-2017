<template lang="pug">
  div
    h3.ui.dividing.header Reviews
    .ui.comments
      .ui.centered.inline.loader(:class="{ active: loading}")
      comment(v-for="comment in reviews.results" :key="comment.id" :content="comment.content" :author="comment.author" :url="comment.url")
      .ui.tertiary.segment(v-show="msg && !loading")
        i.warning.icon
        | {{msg}}
</template>

<script>
import { mapActions } from 'vuex'
import comment from './comment.vue';

export default {
  name: 'Reviews',
  props: ['movie-id'],
  data() {
    return {
      loading: true,
      msg: '',
      // {id, page,results: [{id, content, author, url }],total_pages, total_results}
      reviews: { id: null, page: null, results: [] }
    }
  },
  components: { comment },
  computed: {},
  methods: {
    ...mapActions(['getReviews']),
    loadReviews: function () {
      this.getReviews(this.movieId).then(data => {
        this.loading = false;
        if (data.results.length > 0) {
          this.reviews = data;
        } else {
          this.msg = "This movie has no reviews.";
        }
      });
    }
  },
  created() {},
  mounted() {
    this.loadReviews();
  }
}
</script>
