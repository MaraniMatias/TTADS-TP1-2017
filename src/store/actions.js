import axios from 'axios';
const baseURL = "https://api.themoviedb.org/3";
// Dejo la key separada porque creo que se puede enviar por post para algunso caso.
const apiKey = "66ae687f31e3066ab23a1b7128278d17";
const parameterKey = "?api_key=" + apiKey;

export default {
  loadMovieDiscover: function({ commit,state },page) {
    axios.get(baseURL + "/discover/movie" + parameterKey+"&sort_by=popularity.desc&page="+page).then((response) => {
      commit('set_discover_movie', { discover: response.data });
    }, (err) => {
      console.error(err);
    });
  },
  gerMovieInfo: function({commit,state},movieId){
    axios.get(baseURL+"/movie/"+movieId+parameterKey).then((response)=>{

    },(err)=>{
      console.error(err);
    });
  },
  gerReviews: function({commit,state},movieId){
    return axios.get(baseURL+"/movie/"+movieId+"/reviews"+parameterKey).then((response)=>{
      return response.data;
    },(err)=>{
      console.error(err);
    });
  }
};
