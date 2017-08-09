import Vue from 'vue';

import './index.less';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Hello from './components/Hello.vue';

/*
 * Jugar con las URL desde el navegador.
 */
const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    components: {
      default: Hello
    }
  }, {
    path: '/todo',
    components: {
      default: Hello
    }
  }]
});

/*
 * Construye la app apartir del elemento con id root.
 */
export default new Vue({
  el: '#root',
  router,
  render: h => h('router-view')
});

