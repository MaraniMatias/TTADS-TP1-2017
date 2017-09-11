import Vue from 'vue';
import VueRouter from 'vue-router';
import { scopedVue, shallow } from 'vue-test-utils';
import { expect } from 'chai';

//import routes from '../../../src/router.js';
import MovieCard from '../../../src/components/movieCard.vue';

Vue.use(VueRouter);
const routes = [{
  name: "movie",
  path: '/movie/:movieId' //,
  //component: movie
}];

const propsData = {
  movieId: 211672,
  star: 6.4,
  title: "Minions",
  poster: "/q0R4crx2SehcEEQEkYObktdeFy.jpg",
  overview: "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
  releaseDate: "2015-06-17",
  genreIds: [10751, 16, 12, 35]
};
//{"vote_average": 6.4,"vote_count": 4381,"id": 211672,"video": false,"title": "Minions","popularity": 1004.719452,"poster_path": "/q0R4crx2SehcEEQEkYObktdeFy.jpg","original_language": "en","original_title": "Minions","genre_ids": [10751, 16, 12, 35],"backdrop_path": "/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg","adult": false,"overview": "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.","release_date": "2015-06-17"}
describe('movieCard.vue', () => {

  it('should render correct contents', () => {
    const Constructor = Vue.extend(MovieCard);
    const vm = new Constructor({ propsData }).$mount();
    expect(vm.$el.querySelector('.card .content .header').innerText)
      .to.equal(propsData.title);
  });

  it('renders props when passed', () => {
    const wrapper = shallow(MovieCard, { propsData });
    expect(wrapper.vm.goMovie).to.be.an('function');
  });

  /*
  it('test for goMovie', (done) => {
    const wrapper = shallow(movieCard, {
      instance: scopedVue(),
      propsData,
      intercept: { $router: routes }
    });
    wrapper.goMovie();
    Vue.nextTick(() => {
      expect(wrapper.vm.goMovie).to.be.an('function');
      done();
    });
  });
  */

});
