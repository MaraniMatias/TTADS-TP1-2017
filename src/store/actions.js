/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
//import axios from 'axios';
const baseURL = "https://api.themoviedb.org/3";
// Dejo la key separada porque creo que se puede enviar por post para algunso caso.
const apiKey = "66ae687f31e3066ab23a1b7128278d17";
const parameterKey = "?api_key=" + apiKey;
export default {
  authenticationGuest: function ({ commit }) {
    return axios.get(baseURL + "/authentication/guest_session/new" + parameterKey)
      .then((response) => {
        commit('set_guest_session', response.data);
      }, (err) => {
        console.error(err);
      });
  },
  loadMovieDiscover: function ({ commit, state }, page = 1) {
    return axios.get(baseURL + "/discover/movie" + parameterKey + "&sort_by=popularity.desc&page=" + page)
      .then((response) => {
        commit('set_discover_movie', response.data);
        return true;
      }, (err) => {
        console.error(err);
      });
  },
  getMovieInfo: function ({ commit, state }, movieId) {
    return axios.get(baseURL + "/movie/" + movieId + parameterKey)
      .then((response) => {
        return response.data;
      }, (err) => {
        console.error(err);
      });
  },
  getReviews: function ({ commit, state }, movieId) {
    return axios.get(baseURL + "/movie/" + movieId + "/reviews" + parameterKey)
      .then((response) => {
        return response.data;
      }, (err) => {
        console.error(err);
      });
  },
  setMovieRating: function ({ commit, state }, obj) {
    return axios.post(baseURL + "/movie/" + obj.movieId + "/rating" + parameterKey + "&guest_session_id=" + state.usuario.guest_session.guest_session_id, { value: obj.value })
      .then((response) => {
        return response.data;
      }, (err) => {
        console.error(err);
      });
  },
  searchMovies: function ({ commit, state }, { query, page }) {
    return axios.get(baseURL + "/search/movie" + parameterKey + "&query=" + query + "&page=" + (page || 1))
      .then((response) => {
        commit('set_discover_movie', response.data);
        return true;
      }, (err) => {
        console.error(err);
      });
  }
};
