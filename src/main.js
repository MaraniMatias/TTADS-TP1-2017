/*
 * VueJS y plugin generales.
 */
import './index.less';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(Vuex);
import store from './store';

/*
 * Componetes
 */
import App from './App.vue';
import deiscoverMovie from './components/discover.vue';
/*
 * Jugar con las URL desde el navegador.
 */
const router = new VueRouter({
  mode: 'history', // navega sin recargar pag y sin #
  routes: [{
      path: '/',
      component: deiscoverMovie
    }
    /*, {
        path: '/vuex',
        component: proyectos
      }, {
        path: '/add',
        component: addBlog
      }, {
        path: '/blog/:id',
        component: singleBlog
      }*/
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

