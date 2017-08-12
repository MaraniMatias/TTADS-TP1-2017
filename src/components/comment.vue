<template lang="pug">
.ui.piled.segment
  .comment
    a.avatar
      img(src='/images/avatar/small/matt.jpg')
    .content
      a.author {{author}}
      .metadata
        span.date {{key}}
      .text {{content}}
      .actions
        a(:href="url")
          i.expand.icon Full-screen
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'comment',
  // Sepuede pasar como objetos https://vuejs.org/v2/guide/components.html#Props
  props: ['content', 'author', 'url'],
  data() {
    return {}
  },
  components: {},
  computed: {},
  methods: {},
  created() {},
  mounted: function () { }

}
</script>
