/*
 * VueJS y plugin generales.
 */
import './index.less';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);
import store from './store';
/*
 * Componetes
 */
import addBlog from './components/vue/addBlog.vue';
import showBlogs from './components/vue/showBlogs.vue';
import singleBlog from './components/vue/singleBlog.vue';
import vuejs from './components/vuejs.vue';

import AppVuex from './components/vuex.vue';
import Hello from './components/Hello.vue';
/*
 * Jugar con las URL desde el navegador.
 */
const router = new VueRouter({
  mode: 'history', // porque???
  routes: [{
    path: '/',
    components: {
      default: Hello
    }
  }, {
    path: '/vuex',
    components: {
      default: AppVuex
    }
  },  {
    path: '/vue',
    component: vuejs
  },{
    path: '/blog',
    component: showBlogs
  }, {
    path: '/blog/add',
    component: addBlog
  }, {
    path: '/blog/blog/:id',
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
  render: h => h('router-view')
});
