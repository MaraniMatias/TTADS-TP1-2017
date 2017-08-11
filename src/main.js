/*
 * VueJS y plugin generales.
 */
import './index.less';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);
import store from './store';

/*
 * Componetes
 */
import addBlog from './components/vue/addBlog.vue';
import showBlogs from './components/vue/showBlogs.vue';
import singleBlog from './components/vue/singleBlog.vue';
import App from './components/vuejs.vue';
import proyectos from './components/project.vue';
/*
 * Jugar con las URL desde el navegador.
 */
const router = new VueRouter({
  mode: 'history', // navega sin recargar pag y sin #
  routes: [{
    path: '/',
    component: showBlogs
  }, {
    path: '/vuex',
    component: proyectos
  }, {
    path: '/add',
    component: addBlog
  }, {
    path: '/blog/:id',
    component: singleBlog
  }]
});
/*
 * Construye la app apartir del elemento con id root.
 */
export default new Vue({
  el: '#root',
  router,
  store: new Vuex.Store(store),
  render: h => h(App)
});

