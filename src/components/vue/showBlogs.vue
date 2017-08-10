<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div class="ui fluid icon input">
      <input type="text" v-model="search" placeholder="search blogs" />
      <i class="search icon"></i>
    </div>
    <div v-for="blog in filteredBlogs" class="ui tall stacked segment">
      <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title }}</h2></router-link>
      <p>{{ blog.body }}</p>
    </div>
  </div>
</template>

<script>
// Imports
import searchMixin from '../../mixins/searchMixin';

export default {
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  created() {
    console.log('article',new Date());
  },
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
      this.blogs = data.body.slice(0,10);
    });
  },
  mixins: [searchMixin]
}
</script>

<style>
#show-blogs{
  max-width: 800px;
  margin: 0px auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

#show-blogs a{
  color: #444;
  text-decoration: none;
}
</style>
