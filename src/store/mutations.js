export default {
  set_discover_movie: (state,  discover ) => {
    state.discover = discover;
  },
  set_guest_session : (state, guestSession) => {
    state.usuario.guest_session = guestSession;
  },
  set_search_results : (state, searchResults) => {
    state.searchResults= searchResults;
  }
};

