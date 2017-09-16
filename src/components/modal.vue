<template lang="pug">
.ui.dimmer.modals.page.transition.visible.active(style='display: block !important;')
  .ui.modal.transition.visible.active(style='top: 287.5px; display: block !important;' :class="size")
    i.close.icon(@click="$emit('close','')")
    .header
      slot(name="header")
    .content
      slot
    .actions
      slot(name="actions")
</template>

<script>
export default {
  name: 'modal',
  props: { size: { type: String, default: '' } },
  data() {
    return {}
  },
  computed: {},
  computed: {},
  methods: {}
}
</script>
