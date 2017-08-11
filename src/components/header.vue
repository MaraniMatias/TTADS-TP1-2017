<template>
  <div class="ui inverted menu">
    <a class="item">
      <router-link to="/" exact>Blog</router-link>
    </a>
    <a class="item">
      <router-link to="/add" exact>Add a new blog</router-link>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
ul{
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav{
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
.ui.inverted.menu a .router-link-active{
  background: #eee;
  color: #444;
}
</style>
