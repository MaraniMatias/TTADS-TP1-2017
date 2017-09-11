<template>
<div class="ui inverted menu">
  <router-link class="item teal" to="/" exact>Home</router-link>
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
  border-radius: 0px;
}
</style>
