/*
 * VueJS y plugin generales.
 */
import './index.less';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(Vuex);
//Vue.config.productionTip = false;
import store from './store';

/*
 * Componentes
 */
import App from './App.vue';
import discoverMovie from './components/discover.vue';
import searchResults from './components/searchResults.vue';
import movie from './components/movie.vue';
/*
 * Jugar con las URL desde el navegador.
 */
const router = new VueRouter({
  //mode: 'history', // navega sin recargar pag y sin #, pero requiere configuracion el backend
  routes: [
  {
    path: '/',
    component: discoverMovie
  },
  {
    name: "movie",
    path: '/movie/:movieId',
    component: movie
  },
  {
    name: "searchResults",
    path: '/search/',
    component: searchResults
  }]
});
/*
 * Construye la app apartir del elemento con id root.
 */
export default new Vue({
  el: '#root',
  router,
  strict: true, // In strict mode any mutations to Vuex state outside of mutation handlers will throw an Error.
  store: new Vuex.Store(store),
  render: h => h(App)
});
