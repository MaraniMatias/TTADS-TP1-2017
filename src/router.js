/*
 * Componentes
 */
import discoverMovie from './components/discover.vue';
import searchResults from './components/searchResults.vue';
import movie from './components/movie.vue';

export default [{
  path: '/',
  component: discoverMovie
  }, {
  name: "movie",
  path: '/movie/:movieId',
  component: movie
  }, {
  name: "searchResults",
  path: '/search/',
  component: searchResults
  }];
