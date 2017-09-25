<template>
<div>
  <div class="ui inverted menu descktop">
    <router-link class="item teal" :to="{ name: 'discover' }" exact>Home</router-link>
    <router-link class="item teal" :to="{ name: 'docs' }" exact>Docs</router-link>
    <a class="item teal" href="https://github.com/MaraniMatias/tp-2017">Repo Git</a>
    <div class="item search-bar">
      <search-bar></search-bar>
    </div>
    <div class="right menu">
      <div class="ui item">
        <button class="ui button"><i class="user icon"></i>Iniciar Sesión</button>
      </div>
    </div>
  </div>
  <div class="ui icon inverted menu movil">
    <router-link class="item teal" :to="{ name: 'discover' }" exact>
      <i class="home icon"></i>
    </router-link>
    <router-link class="item teal" :to="{ name: 'docs' }" exact>
      <i class="book icon"></i>
    </router-link>
    <a class="item teal" href="https://github.com/MaraniMatias/tp-2017">
    <i class="github icon"></i>
  </a>
    <!--
    <vid class="item teal link">
      <i class="search icon"></i>
    </vid>
    -->
    <div class="right menu">
      <div class="ui item link">
        <i class="user icon"></i>
      </div>
    </div>
  </div>
  <div class="ui container">
    <div class="ui grid">
      <div class="wide column">
        <search-bar></search-bar>
      </div>
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

.item.search-bar {
  margin: auto;
  flex: auto;
}

@media only screen and (max-device-width: 660px) {
  .ui.inverted.menu.descktop {
    display: none;
  }
}

@media only screen and (min-device-width: 661px) {
  .movil {
    display: none;
  }
  .ui.container {
    display: none;
  }
}
</style>
