export default {
  findMovie: (state) => movieId => {
    return state.discover.results.find(movie => movie.id === movieId);
  }
};
