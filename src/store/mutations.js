export default {
  set_discover_movie: (state, discover) => {
    state.discover = discover;
  },
  set_guest_session: (state, guestSession) => {
    state.usuario.guest_session = guestSession;
  },
  set_usuario_login: (state, userLogin) => {
    /*state.usuarioLogin.gravatar = "";
    state.usuarioLogin.id = usuarioLogin.id;
    state.usuarioLogin.includeAdult = usuarioLogin.include_adult;
    state.usuarioLogin.name = usuarioLogin.name,
    state.usuarioLogin.username = usuarioLogin.username;*/
    state.usuario.gravatar = "";
    state.usuario.id = userLogin.id;
    state.usuario.includeAdult = userLogin.include_adult;
    state.usuario.name = userLogin.name,
    state.usuario.username = userLogin.username;

    //state.usuarioLogin.user = userLogin;
  }
};
