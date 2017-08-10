<template lang="pug">
#show-blogs
  h1 All Blog Articles
  .ui.fluid.icon.input
    input(type="text" v-model="search" placeholder="search blogs")
    i.search.icon
  .ui.tall.segment(v-for="blog in filteredBlogs")
    router-link(v-bind:to="'/blog/' + blog.id")
      h2 {{ blog.title }}
    p {{ blog.body }}
</template>

<script>
export default {
  props: ['some-property-here'],
  data () {
    return {
      search:'',
      filteredBlogs:'',
      whatever: ''
    }
  },
  vuex: {
    getters: {
      user: store => store.user
    },
      actions: {
        setUser ({dispatch}, obj) {
          dispatch('SET_USER', obj);
        }
      }
  },
  methods: {
    ordinaryButtonClickHandler () {
      let user = {
        user: {
          username: 'New username',
            email: 'email@email.com'
        }
      }
      this.setUser(user);
    }
  },
  created() {
    console.log('article vuex',new Date());
  }
}
</script>

<style></style>
