import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

export default {
  state: {
    discover: {
      results: []
    }
  },
  actions,
  mutations,
  getters,
  modules: {}
};

