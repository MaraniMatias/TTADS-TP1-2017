<template lang="pug">
  div
    h1 {{ hello }}
    p :D
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      hello: 'Hello World! :D'
    };
  }
};
</script>
