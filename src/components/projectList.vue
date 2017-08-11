<template lang="html">
  <div class="">
    <table class="table">
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Assigned To</th>
          <th>Priority</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in projects">
          <td>{{item.name}}</td>
          <td>{{item.assignedTo}}</td>
          <td>{{item.priority}}</td>
          <td><i v-if="item.completed" class="fa fa-check"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'projectList',
  computed: mapState([
    'projects'
  ]),
  /*
  computed: {
    projects () {
      return this.$store.state.projects
    }
  }
  */
  created() {
    console.log('article vuex',new Date());
  }
}
</script>

<style></style>
