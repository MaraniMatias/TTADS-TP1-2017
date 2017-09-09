<template lang="pug">
.card(@click="goMovie()")
  .image
    img(:src="poster?'https://image.tmdb.org/t/p/w342/'+poster:'http://www.sellingpage.com/images/no_photo_icon.PNG'")
  .content
    .header {{title}}
    .meta
      a genre: {{genreIds}}
    .description {{overview}}
  .extra.content
    span.right.floated {{releaseDate}}
    span
      .ui.star.rating.large
        i.icon(v-for="s in 5" :class="[ s <= star/2 ? 'active' : '' ]")
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'movieCard',
  // Sepuede pasar como objetos https://vuejs.org/v2/guide/components.html#Props
  props: ['star','title','poster','overview','release-date','genre-ids','movie-id'],
  data(){
    return {}
  },
  components: { },
  computed: {},
  methods: {
    goMovie: function(){
      this.$router.push( { name: 'movie', params: { movieId: this.movieId, star: this.star }} );
    }
  },
  mounted: function () { }

}
</script>
