//import moxios from 'moxios';
//import { mount } from 'avoriaz';
import Vue from 'vue';
//const baseURL = "https://api.themoviedb.org/3";

import Reviews from '../../../src/components/reviews.vue';
const propsData = { movieId: 211672 };

describe('reviews.vue', () => {
  let Constructor;
  let vm;

  beforeEach(() => {
    //moxios.install();
    Constructor = Vue.extend(Reviews);
    vm = new Constructor({ propsData }).$mount();
  });

  afterEach(() => {
    //moxios.uninstall();
    vm.$destroy();
  });

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('div h3.ui.dividing.header').textContent)
      .to.equal('Reviews');
  });

  it('should set prop movie-id', () => {
    expect(vm.movieId).to.equal(propsData.movieId);
  });

  it('should excite reviews data on the component', () => {
    expect(vm.reviews).to.be.an('object');
  });
/*
  it('should get reviews', (done) => {
    let component = mount(Reviews);
    moxios.stubRequest(baseURL+'/movie/211672', {
      status: 200,
      response: {"id":211672,"page":1,"results":[{"id":"55a58e46c3a3682bb2000065","author":"Andres Gomez","content":"The minions are a nice idea and the animation and London recreation is really good, but that's about it.\r\n\r\nThe script is boring and the jokes not really funny.","url":"https://www.themoviedb.org/review/55a58e46c3a3682bb2000065"},{"id":"55e108c89251416c0b0006dd","author":"movizonline.com","content":"a nice idea and the animation.the new thing in animation field.a movie that every one should like an kid or old man.","url":"https://www.themoviedb.org/review/55e108c89251416c0b0006dd"}],"total_pages":1,"total_results":2}
    });

    moxios.wait(() => {
      console.log(component.data().reviews);
      expect(component.data().reviews.id).to.be(propsData.movieId);
      done();
    });
  });
  //const $route = { name: 'toto' };
*/
});
