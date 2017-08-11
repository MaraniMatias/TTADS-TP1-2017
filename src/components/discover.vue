<template lang="pug">
#discover
  .column(is-half)
    h1 Movie Discover
</template>

<script>

export default {
  name: 'discover',
  components: {
  },
  mounted: function () {
    this.$store.dispatch('loadMovieDiscover')
  }
}
</script>
