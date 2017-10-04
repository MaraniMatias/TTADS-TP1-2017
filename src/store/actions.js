/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
//import axios from 'axios';
"use strict";
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
    return axios.get(baseURL + "/search/movie", {
        params: {
          api_key: apiKey,
          query,
          page: page || 1
        }
      })
      .then((response) => {
        commit('set_discover_movie', response.data);
        return true;
      }, (err) => {
        console.error(err);
      });
  },
  createRequestToken: function () {
    return axios.get(baseURL + "/authentication/token/new" + parameterKey)
      .then((response) => {
        console.info("--> Create Request Token: OK");
        console.info(response.data);
        return response.data.request_token;
      }, (err) => {
        console.error("--> Create Request Token: Error");
        console.error(err);
        return "Error al obtener el Reques Token";
      });
  },
  createSessionWithLogin: function ({ commit }, { userName, userPass, requestToken }) {
    return axios.get(baseURL + "//authentication/token/validate_with_login", {
        params: {
          api_key: apiKey,
          username: userName,
          password: userPass,
          request_token: requestToken
        }
      })
      .then((response) => {
        console.info("--> Create Session Whit Login: OK");
        console.info(response.data);
        return response.data.request_token;
      }, (err) => {
        console.error(err);
        console.error("--> Create Session Whit Login: Error");
        throw "Usuario o contraseña incorrectos. Vuelva a intentar.";
      });
  },
  createSession: function ({ commit }, { requestToken }) {
    return axios.get(baseURL + "/authentication/session/new" + parameterKey + "&request_token=" + requestToken)
      .then((response) => {
        console.info("--> Create Session: OK");
        console.info(response.data);
        return response.data.session_id;
      }, (err) => {
        console.error(err);
        console.error("--> Create Session: Error");
        return "Error al crear la sesión del usuario.";
      });
  },
  getDetailsOfAccount: function ({ commit }, { session_id }) {
    return axios.get(baseURL + "/account" + parameterKey + "&session_id=" + session_id)
      .then((response) => {
        console.info("--> Get Details of Account: OK");
        console.info(response.data);
        return response.data;
      }, (err) => {
        console.error(err);
        console.error("--> Get Details of Account: Error");
        return "Error al obtener los detalles del usuario.";
      });
  },
  setUsuarioLogin: function ({ commit, state }, { response }) {
    commit('set_usuario_login', response);
  },
  cerrarSesionUsuario: function ({ commit }) {
    console.info("Cerrar sesion");
    commit('set_usuario_login', "");
  }
};
