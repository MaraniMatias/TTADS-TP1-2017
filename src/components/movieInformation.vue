<template lang="pug">
#portada
  .ui.very.relaxed.items
    .item
      .image.ui.medium.rounded.image
        img(:src="getPoster()")
        star(:star="star" :id="movie.id")
      .content
        .ui.label
          i.calendar.icon
          | {{movie.release_date}}
        br
        h1.ui.dividing.header {{movie.title}}
        .ui.icon.message(style="width:90%")
          i.browser.icon
          .content
            .header
              h2 Overview
            p {{movie.overview}}

        .ui.icon.message(style="width:90%")
          i.thumbs.up.icon
          .content
            .header
              h2 Popularity
              .ui.progress(data-value="70" data-total="100")
                .bar
                  .progress
            p {{movie.popularity}}

        .ui.icon.message(style="width:90%")
          i.star.icon
          .content
            .header
              h2 Vote average
              .ui.progress(data-value="70" data-total="100")
                .bar
                  .progress
            p {{movie.vote_average}}
  //- Esto endria que ser el compoente de ranking, el de las estrellas y juntar esta funcionalidad.
  //- el for es una caracteristica de pug
    - for(var i = 1; i <= 10; i++){
    button(@click="setRating("+i+")") #{i}
    - }
    //- Esto es solo a modo ilutrativo, de las propiedad del objeto movie
    pre {{movieData}}
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import star from './star.vue';

export default {
  name: 'movieInfo',
  props: [ 'movie', 'star'],
  data() {
    return{}
  },
  methods:{
    getPoster: function(){
      return  this.movie.poster_path?'https://image.tmdb.org/t/p/w342/'+this.movie.poster_path:'http://www.sellingpage.com/images/no_photo_icon.PNG'
    }
  },
  components: {
    star
  }
}
</script>

<style scoped>
</style>
