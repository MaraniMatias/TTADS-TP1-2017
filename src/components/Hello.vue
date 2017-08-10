<template lang="pug">
  .ui.main.text.container
    h1.ui.header {{ header }}
    p This is a basic fixed menu template using fixed size containers.
    p A text container is used for the main container, which is useful for single column layouts
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      header: 'Semantic UI & Vue Fixed Template'
    };
  }
};
</script>
