<template lang="pug">
#portada
  .ui.very.relaxed.items
    .item
      .image.ui.medium.rounded.image
        img(:src="poster?'https://image.tmdb.org/t/p/w342/'+poster:'http://www.sellingpage.com/images/no_photo_icon.PNG'")
      .content
        .ui.label
          <i class="calendar icon"></i> {{movieData.release_date}}
        <br><br>
        h1.ui.dividing.header {{movieData.title}}
        
        <div class="ui icon message" style="width:90%">
          <i class="browser icon"></i>
          .content
            .header
              h2 Overview
            p {{movieData.overview}}
        </div>

        <div class="ui icon message" style="width:90%">
          <i class="thumbs up icon"></i>
          .content
            .header
              h2 Popularity
            <div class="ui progress" data-value="70" data-total="100">
              <div class="bar">
                <div class="progress"></div>
              </div>
            </div>

            p {{movieData.popularity}}
        </div>

        <div class="ui icon message" style="width:90%">
          <i class="star icon"></i>
          .content
            .header
              h2 Vote average
            <div class="ui progress" data-value="70" data-total="100">
              <div class="bar">
                <div class="progress"></div>
              </div>
            </div>

            p {{movieData.vote_average}}
        </div>
        
  //- Esto endria que ser el compoente de ranking, el de las estrellas y juntar esta funcionalidad.
  //- el for es una caracteristica de pug
    - for(var i = 1; i <= 10; i++){
    button(@click="setRating("+i+")") #{i}
    - }
    //- Esto es solo a modo ilutrativo, de las propiedad del objeto movie
    pre {{movieData}}
  

</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'movieInfo',
  props: [ 'movie-data', 'poster' ],
  data() {
    return{
     movie: {}
    }
  },
  components: {

  }
}
</script scoped>

<style scoped>
   

</style>

