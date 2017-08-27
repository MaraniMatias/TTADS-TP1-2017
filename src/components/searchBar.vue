<template>
  <div id="buscador">
    <div class="ui search" style="text-align:center">
        <div class="ui icon input" style="width:80%">
            <input class="prompt" placeholder="Search..." type="text">
            <i class="search icon"></i>
        </div>
        <div class="results"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'search',
  props: [ ],
  data() {
    return{
     search: {}
    }
  },
  components: {

  }
}
</script>

<style scoped>
</style>
