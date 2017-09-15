<template lang="pug">
.markdown-body
  file-markdown
</template>

<script>
import fileMarkdown from '../../docs/README.md';
import 'highlight.js/styles/github.css';
import 'github-markdown-css';

export default {
  name: 'Documentacion',
  components: {
    fileMarkdown
  }
}
</script>
