<template>
<div class="ui inverted menu">
  <router-link class="item teal" :to="{ name: 'discover' }" exact>Home</router-link>
  <router-link class="item teal" :to="{ name: 'docs' }" exact>Docs</router-link>
  <a class="item teal" href="https://github.com/MaraniMatias/tp-2017">Repo Git</a>
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
