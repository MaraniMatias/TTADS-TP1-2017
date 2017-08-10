<template lang="pug">
#app.ui.main.text.container
  p {{name}}
  post-component
</template>

<script>
import post from "./components/post.vue"

export default {
  name: 'app',
  data() {
    return {
      name:"Example vue-rest-api"
    };
  },
  components: {
    'post-component':post
  }
}
</script>

<style>
body{
  font-family: Ubuntu;
  color: #555;
}
</style>
