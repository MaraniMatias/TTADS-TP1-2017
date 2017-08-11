import axios from 'axios';
//import actions from './actions.js';
//import mutations from './mutations.js';
const baseURL = "https://jsonplaceholder.typicode.com";

export default {
  state: {
    projects: [],
    userProfile: {}
  },
  actions: {
    LOAD_PROJECT_LIST: function({
      commit
    }) {
      //axios.get('/secured/projects').then((response) => {
      axios.get(baseURL+'/posts').then((response) => {
        commit('SET_PROJECT_LIST', {
          list: response.data
        });
      }, (err) => {
        console.log(err);
      });
    }
  },
  mutations: {
    SET_PROJECT_LIST: (state, {
      list
    }) => {
      state.projects = list;
    }
  },
  getters: {
    completedProjects: state => {
      return state.projects.filter(project => project.completed).length;
    }
  },
  modules: {

  }
};

