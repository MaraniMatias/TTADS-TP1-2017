import axios from 'axios';
const baseURL = "https://api.themoviedb.org/3";
// Dejo la key separada porque creo que se puede enviar por post para algunso caso.
const apiKey = "66ae687f31e3066ab23a1b7128278d17";
const parameterKey = "api_key=" + apiKey;

export default {
  /////////////////////////////
  loadMovieDiscover: function({ commit,state },page) {
    axios.get(baseURL + '/discover/movie?' + parameterKey+'&sort_by=release_date.desc&page='+page).then((response) => {
      commit('set_discover_movie', { discover: response.data });
    }, (err) => {
      console.error(err);
    });
  },
  //////////////////////////////
/*  TOGGLE_COMPLETED: function({
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
*/
};

