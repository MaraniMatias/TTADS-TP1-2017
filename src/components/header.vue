<template>
  <div class="ui inverted menu">
    <router-link class="item teal" :to="{ name: 'discover' }" exact>Home</router-link>
    <router-link class="item teal" :to="{ name: 'docs' }" exact>Docs</router-link>
    <a class="item teal" href="https://github.com/MaraniMatias/tp-2017">Repo Git</a>
    <searchBar style="width:80%; margin-top:5px"></searchBar>
    <div class="right menu">
      <div class="item">
        <button class="ui active button"><i class="user icon"></i>Iniciar Sesión</button>
      </div>
    </div>
  </div>
</template>

<script>
import searchBar from './searchBar.vue';
export default {
  components: {
    searchBar
  }
}
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
