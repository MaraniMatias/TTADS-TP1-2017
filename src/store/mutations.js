export default {
  set_discover_movie: (state, { discover }) => {
    state.discover = discover;
  },
  //////////////////////////
  /*UPDATE_PROJECT: (state, {
    item
  }) => {
    let idx = state.projects.map(p => p.id).indexOf(item.id);
    state.projects.splice(idx, 1, item);
  },
  ADD_PROJECT: (state, {
    project
  }) => {
    state.projects.push(project);
  }*/
};

