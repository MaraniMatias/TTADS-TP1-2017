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
export default {
  name: 'paginator',
  props: ['pages', 'page'],
  data() {
    return {
      linf: 1,
      lsup: 1,
      range: 1
    }
  },
  methods: {
    updateDiscover: function (value) {
      //console.log("i", this.linf, 'v', value, 's', this.lsup, 'r', this.range);
      this.$store.dispatch('loadMovieDiscover', value).then((d) => {
        this.build;
      });
    }
  },
  computed: {
    build: function () {
      //console.log("i", this.linf, 'v', 's', this.lsup, 'r', this.range,this.page,this.pages);
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
    this.build;
  }
}
</script>

<style scope>
.center.aligned.ui.container {
  margin-bottom: 12px;
}
</styles>
