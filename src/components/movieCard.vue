<template lang="pug">
  //#movieCard
  .card
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
          i.icon(v-for="s in 4" :class="[ s <= star ? 'active' : '' ]")
</template>

<script>
export default {
  name: 'movieCard',
  // Sepuede pasar como objetos https://vuejs.org/v2/guide/components.html#Props
  props: ['star','title','poster','overview','release-date','genre-ids'],
  data(){
    return {
    page:1
    }
  },
  components: { },
  mounted: function () { }
}
</script>
