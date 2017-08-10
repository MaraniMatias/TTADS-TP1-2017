//import actions from './actions.js';
//import mutations from './mutations.js';

export default {
  state: {
    user: {
      name: '',
      email: ''
    }
  },
  mutations: {
    SET_USER(store, obj) {
      store.user = obj.user;
    }
  }
};

