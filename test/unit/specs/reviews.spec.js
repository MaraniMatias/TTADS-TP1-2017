import Vue from 'vue';

import Reviews from '../../../src/components/reviews.vue';
const movieId = 211672;

describe('reviews.vue', () => {
  let Constructor;
  let vm;

  afterEach(() => {
    vm.$destroy();
  });

  beforeEach(() => {
    Constructor = Vue.extend(Reviews);
    vm = new Constructor({
      propsData: { movieId }
    }).$mount();
  });

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('div h3.ui.dividing.header').textContent)
      .to.equal('Reviews');
  });

  it('should set prop movie-id', () => {
    expect(vm.movieId).to.equal(movieId);
  });

  it('should excite reviews data on the component', () => {
    expect(vm.reviews).to.be.an('object');
  });

  it('should get reviews', () => {
    //expect(vm.reviews.results).to.be.an('array');
  });
  //const $route = { name: 'toto' };
});
