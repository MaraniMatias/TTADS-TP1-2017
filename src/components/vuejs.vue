<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// Imports
import showBlogs from './vue/showBlogs.vue';
import listBlogs from './vue/listBlogs.vue';
import header from './vue/header.vue';

export default {
  components: {
    'app-header': header
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>
