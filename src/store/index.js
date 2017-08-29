import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

export default {
  state: {
    usuario: {
      guest_session: { guest_session_id: "", expires_at: "" },
      // /authentication/token/new?api_key= ...
      // /authentication/token/validate_with_login?api_key= ...
      request_token: { request_token: "", expires_at: "" },
    },
    discover: {
      results: []
    },
    searchResults: {
      results: []
    }
  },
  actions,
  mutations,
  getters,
  modules: {}
};
