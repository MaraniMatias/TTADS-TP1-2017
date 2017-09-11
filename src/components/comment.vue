<template lang="pug">
.ui.piled.segment
  .comment
    a.avatar
      img(:src="avatar")
    .content
      a.author {{author}}
      .metadata
        span.date {{key}}
      .text {{content}}
      .actions
        a.info.circle.icon(:href="url") More info on the movie db
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'comment',
  // Sepuede pasar como objetos https://vuejs.org/v2/guide/components.html#Props
  props: ['content', 'author', 'url'],
  data() {
    return {
      key: '',
      // genera anatars :D
      avatar: "https://api.adorable.io/avatars/40/" + this.author
    }
  },
  components: {},
  computed: {},
  methods: {},
  created() {},
  mounted: function () {}
}
</script>
