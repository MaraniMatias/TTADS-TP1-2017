/*
 * VueJS y plugin generales.
 */
import './index.less';
//import Vue from 'vue';
//import Vuex from 'vuex';
//import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = process.env.NODE_ENV !== 'production';
import store from './store';

/*
 * Componentes
 */
import App from './App.vue';
import discoverMovie from './components/discover.vue';
import movie from './components/movie.vue';
import docs from './components/docs.vue';
/*
 * Jugar con las URL desde el navegador.
 */
const router = new VueRouter({
  linkActiveClass: 'active',
  //mode: 'history', //navega sin recargar pag y sin #, requiere config. el backend
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      name: 'discover',
      path: '/',
      component: discoverMovie
  }, {
      name: "movie",
      path: '/movie/:id',
      props: true,
      component: movie
    }, {
      name: "docs",
      path: '/docs',
      component: docs
  }, {
      name: "search",
      path: '/search/:query',
      props: true,
      component: discoverMovie
    }
  ]
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
