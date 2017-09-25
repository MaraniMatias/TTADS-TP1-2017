<template lang="pug">
.center.aligned.ui.container
  .ui.pagination.menu
    a.item(@click="updateDiscover(page-1)" v-if="pages>0&&linf>0")
      i.angle.left.icon
    a.item(@click="updateDiscover(linf+p)" v-for="p in range" :class="{active : (linf+p<=pages && page==linf+p)}") {{linf+p}}
    a.item(@click="updateDiscover(page+1)" v-if="page<pages-1")
      i.angle.right.icon
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'paginator',
  props: {
    page: { type: Number, default: 1 },
    pages: { type: Number, default: 1 },
    long: { type: Number, default: 5 }
  },
  data() {
    return { linf: 1, lsup: 1, range: 0 }
  },
  methods: {
    ...mapActions(['loadMovieDiscover', 'searchMovies']),
    updateDiscover: function (page = 1) {
      if (/search/.test(this.$route.name)) {
        this.searchMovies({ query: this.$route.params.query, page });
      } else {
        this.loadMovieDiscover(page);
      }
    },
    build: function () {
      this.linf = (this.page - (this.long / 2 + 0.5) < 0) ? 0 : this.page - (this.long / 2 + 0.5);
      this.lsup = (this.page + (this.long / 2) > this.pages) ? this.pages : (this.page + this.long / 2 - 0.5);
      if (this.pages < this.long) {
        this.linf = 0;
        this.lsup = this.pages;
      } else {
        if (this.linf === 0) { this.lsup = this.lsup + (this.long - this.lsup); }
        if (this.lsup === this.pages) { this.linf = this.pages - this.long; }
      }
      this.range = this.lsup - this.linf;
    }
  },
  watch: {
    page() {
      this.build();
    },
    pages() {
      this.build();
    }
  },
  created() {
    this.build();
  }
}
</script>

<style scope>
.center.aligned.ui.container {
  margin-bottom: 12px;
}
</styles>
