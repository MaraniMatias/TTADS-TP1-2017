<template lang="pug">
.ui.comments
  h3.ui.dividing.header Reviews
  comment(v-for="comment in reviews.results" :key="comment.id" :content="comment.content" :author="comment.author" :url="comment.url")
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import comment from './comment.vue';

export default {
  name: 'reviews',
  props: ['movie-id'],
  data(){
    return {
      // {id, page,results: [{id, content, author, url }],total_pages, total_results}
      reviews: {}
    }
  },
  components: {
    //'comment-component': comment
    comment
  },
  computed: { },
  mounted: function () {
    this.$store.dispatch('gerReviews',this.movieId).then(data=>{
      this.reviews=data;
    })
  }
}
</script>

