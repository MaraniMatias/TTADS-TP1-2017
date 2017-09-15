<template lang="pug">
.markdown-body
  file-markdown
</template>

<script>
import fileMarkdown from '../../docs/README.md';

export default {
  name: 'Documentacion',
  components: {
    fileMarkdown
  }
}
</script>
