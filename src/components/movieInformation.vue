<template lang="pug">
.ui.grid.container.stackable
  .ui.six.wide.column.center.aligned
    .ui.column(style="display: flex;")
      img(:src="getPoster()")
    .ui.column
      star(:star="movie.vote_average" :id="movie.id")
  .ui.ten.wide.column
    .ui.one.column.grid
      .column
        .ui.label
          i.calendar.icon
          | {{movie.release_date}}
      .column
        h1.ui.dividing.header {{movie.title}}
      .column
        .ui.icon.message
          i.browser.icon
          .content
            .header
              h2 Overview
            p {{movie.overview}}
      .column
        .ui.icon.message
          i.thumbs.up.icon
          .content.center
            h2 Popularity
            .ui.horizontal.statistic
              .value(:style="{color: getColor()}") {{movie.popularity}}
      .column
        .ui.icon.message
          i.star.icon
          .content.center
            h2 Vote average
            .ui.horizontal.statistic
              .value(:style="{color: getColor()}") {{movie.vote_average}}
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
    getColor: function () {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
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
.center {
  text-align: center;
  margin: 0 auto;
}

@media only screen and (max-device-width: 480px) {
  .ui.icon.message {
    display: block;
  }
  .ui.icon.message>i.icon {
    margin: 0px;
  }
}
</style>
