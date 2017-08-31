<template>
  <div class="ui inverted menu">
      <router-link class="item teal"to="/" exact>Blog</router-link>
      <router-link class="item" to="/add" exact>Add a new blog</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.ui.menu {
  border-radius: 0px;
}
.ui.inverted.menu .router-link-active {
  background-color: #00b5ad;
}
</style>
