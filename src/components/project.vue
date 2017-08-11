<template lang="html">
  <div id="projects">
    <div class="columns">
      <div class="column is-half">
        <div class="notification">
          Project List
        </div>
        <project-list></project-list>
        <add-project></add-project>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projectList from './projectList.vue'
import addProject from './addProject.vue'

export default {
  name: 'projects',
  components: {
    projectList,
    addProject
  },
  mounted: function () {
    this.$store.dispatch('LOAD_PROJECT_LIST')
  }
}
</script>
