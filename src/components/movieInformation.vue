<template lang="pug">
.ui.very.relaxed.items
  .item
    .image.ui.medium.rounded.image
      img(:src="getPoster()")
      star(:star="movie.vote_average" :id="movie.id")
    .content
      .ui.label
        i.calendar.icon
        | {{movie.release_date}}
      br
      br
      h1.ui.dividing.header {{movie.title}}
      br
      p
      .ui.icon.message(style="width:90%")
        i.browser.icon
        .content
          .header
            h2 Overview
          p {{movie.overview}}
      .ui.icon.message(style="width:90%")
        i.thumbs.up.icon
        .content
          .center
            h2 Popularity
            .header
              .ui.horizontal.statistic
                .value(:style="{color: getColor()}") {{movie.popularity}}
                .label
      .ui.icon.message(style="width:90%")
        i.star.icon
        .content
          .center
            h2 Vote average
            .header
              .ui.horizontal.statistic
                .value(:style="{color: getColor()}") {{movie.vote_average}}
                .label
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import star from './star.vue';


export default {
  name: 'movieInfo',
  props: ['movie'],
  data() {
    return {
      //genres: ""
    }
  },
  methods: {
    getPoster: function () {
      return this.movie.poster_path ? 'https://image.tmdb.org/t/p/w342/' + this.movie.poster_path : 'http://www.sellingpage.com/images/no_photo_icon.PNG'
    },
    getColor: function() {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      var color = "#"+randomColor;
      return color
    },
    /*getGenres: function(){
      var genres = "";
      console.log(this.movie.genres);
      for(var i=0; i<this.movie.genres.length; i++ ){
        if (i === this.movie.genres.length-1){
          genres += this.movie.genres[i].name;
        }else{
          genres += this.movie.genres[i].name+", ";
        }
      }
      return genres;
    }*/
  },
  components: {
    star
  }
}
</script>

<style scoped>
.center{
  text-align: center;
  margin: 0 auto;
}
</style>
