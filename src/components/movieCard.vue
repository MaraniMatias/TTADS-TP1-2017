<template lang="pug">
.card(@click="goMovie()")
  .image
    img(:src="poster?'https://image.tmdb.org/t/p/w342/'+poster:'http://www.sellingpage.com/images/no_photo_icon.PNG'")
  .content
    .header {{title}}
    .meta(v-if="!adult")
      i.check.circle.icon 
      span Apto para todo público.
    .meta(v-else) 
      i.minus.circle.icon 
      span Contenido adulto.
    .description {{overview}}
  .extra.content
    span.right.floated {{releaseDate}}
    span {{star}}
      i.star.icon.yellow
</template>

<script>
export default {
  name: 'movieCard',
  // Sepuede pasar como objetos https://vuejs.org/v2/guide/components.html#Props
  props: ['star', 'title', 'poster', 'overview', 'release-date', 'genres', 'movie-id', 'adult'],
  data() {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    goMovie: function () {
      this.$router.push({ name: 'movie', params: { id: this.movieId } });
    }
  },
  mounted() {}
}
</script>
