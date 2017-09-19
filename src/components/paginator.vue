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
  props: ['pages', 'page'],
  data() {
    return { linf: 1, lsup: 1, range: 0 }
  },
  methods: {
    ...mapActions(['loadMovieDiscover']),
    updateDiscover: function (value = 1) {
      this.loadMovieDiscover(value).then((d) => {
        this.build();
      });
    },
    build: function () {
      this.linf = (this.page - 5 < 0) ? 0 : this.page - 5;
      this.lsup = (this.page + 4 > this.pages) ? this.pages : this.page + 4;
      if (this.pages < 9) {
        this.linf = 0;
        this.lsup = this.pages;
      } else {
        if (this.linf === 0) { this.lsup = this.lsup + (9 - this.lsup); }
        if (this.lsup === this.pages) { this.linf = this.pages - 9; }
      }
      this.range = this.lsup - this.linf;
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
