"use strict";
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
import login from './components/login.vue';
import userProfile from './components/userProfile.vue';
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
      props: (route) => ({ id: Number(route.params.id) }),
      //props: true,
      component: movie
    }, {
      name: "docs",
      path: '/docs',
      component: docs
  }, {
      name: "search",
      path: '/search/:query',
      props: (route) => ({ query: String(route.params.query) }),
      //props: true,
      component: discoverMovie
    }, {
      name: "login",
      path: '/login',
      component: login
    }, {
      name: "userProfile",
      path: '/profile',
      component: userProfile
    }
  ]
});
router.beforeEach((to, from, next) => {
  if( /discover/.test(to.name) && /search/.test(from.name) ){
    // realizamos de nuevo la busqeuda inicial
    vm.$store.dispatch.loadMovieDiscover();
  }
  next();
});
/*
 * Construye la app apartir del elemento con id root.
 */
var vm = new Vue({
  el: '#root',
  router,
  strict: true, // In strict mode any mutations to Vuex state outside of mutation handlers will throw an Error.
  store: new Vuex.Store(store),
  render: h => h(App)
});
export default vm;
