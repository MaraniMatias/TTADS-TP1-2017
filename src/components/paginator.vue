<template>
<div class="ui centered grid">
  <div class="center aligned column">
    <div class="ui pagination menu">
      <a class="item">
      <i class="angle left icon"></i>
    </a>
    <!--<a v-for:"page in pages">
      <a class="item">
      {{indexOf(page)}}
    </a>
    </a>-->
    <a class="active item">
      {{page}}
    </a>
      <!--<div class="disabled item">
        ...
      </div>-->
    <a class="item">
      {{page + 1}}
    </a>
      <a class="item">
      {{page + 2}}
    </a>
    <a class="item">
      {{page + 3}}
    </a>
    <a class="item">
      {{page + 4}}
    </a>
      <a class="item">
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
  }
}
</script>
