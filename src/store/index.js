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
    TOGGLE_COMPLETED: function({
      commit,
      state
    }, {
      item
    }) {
      axios.put('/secured/projects/' + item.id, item).then((response) => {
        commit('UPDATE_PROJECT', {
          item: response.data
        });
      }, (err) => {
        console.log(err);
      });
    },
    LOAD_PROJECT_LIST: function({
      commit
    }) {
      //axios.get('/secured/projects').then((response) => {
      axios.get(baseURL + '/posts').then((response) => {
        commit('SET_PROJECT_LIST', {
          list: response.data
        });
      }, (err) => {
        console.log(err);
      });
    },
    ADD_NEW_PROJECT: function({
      commit
    }) {
      axios.post('/secured/projects').then((response) => {
        commit('ADD_PROJECT', {
          project: response.data
        });
      }, (err) => {
        console.log(err);
      });
    }
  },
  mutations: {
    UPDATE_PROJECT: (state, {
      item
    }) => {
      let idx = state.projects.map(p => p.id).indexOf(item.id);
      state.projects.splice(idx, 1, item);
    },
    SET_PROJECT_LIST: (state, {
      list
    }) => {
      state.projects = list;
    },
    ADD_PROJECT: (state, {
      project
    }) => {
      state.projects.push(project);
    }
  },
  getters: {
    completedProjects: state => {
      return state.projects.filter(project => project.completed).length;
    },
    projectCount: state => {
      return state.projects.length;
    }
  },
  modules: {

  }
};

