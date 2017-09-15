<template>
<div class="ui centered grid">
  <div class="center aligned column">
    <div class="ui pagination menu">
      <a class="item" @click="updateDiscover(page-1)">
        <i class="angle left icon"></i>
      </a>
      <a class="active item">
        {{page}}
      </a>
      <a class="item" @click="updateDiscover(page+1)">
        {{page + 1}}
      </a>
        <a class="item" @click="updateDiscover(page+2)">
        {{page + 2}}
      </a>
      <a class="item" @click="updateDiscover(page+3)">
        {{page + 3}}
      </a>
      <a class="item" @click="updateDiscover(page+4)">
        {{page + 4}}
      </a>
      <a class="item" @click="updateDiscover(page+5)">
        <i class="angle right icon"></i>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'paginator',
  props: ['pages','page'],
  data(){
    return{
      limit: 5
    }
  },
  methods:{
    updateDiscover: function(pag){
      console.log(pag);
      if(pag != 0){
        this.$store.dispatch('loadMovieDiscover',pag)
      }
    }
  }
}
</script>
