//import { mount, beforeEachHooks, afterEachHooks, fakeActions } from 'vue-unit';
import Vue from 'vue';
import sinon from 'sinon';
import Vuex from 'vuex';
import { mount } from 'avoriaz';
import { expect } from 'chai';
import 'babel-polyfill';

import Reviews from '../../../src/components/reviews.vue';
Vue.use(Vuex);

const propsData = { movieId: 211672 };
//const response = { "id": 211672, "page": 1, "results": [{ "id": "55a58e46c3a3682bb2000065", "author": "Andres Gomez", "content": "The minions are a nice idea and the animation and London recreation is really good, but that's about it.\r\n\r\nThe script is boring and the jokes not really funny.", "url": "https://www.themoviedb.org/review/55a58e46c3a3682bb2000065" }, { "id": "55e108c89251416c0b0006dd", "author": "movizonline.com", "content": "a nice idea and the animation.the new thing in animation field.a movie that every one should like an kid or old man.", "url": "https://www.themoviedb.org/review/55e108c89251416c0b0006dd" }], "total_pages": 1, "total_results": 2 };

describe('reviews.vue', () => {
  let actions;
  let wrapper;

  beforeEach(() => {
    actions = {
      getReviews: sinon.stub()
    };
    wrapper = mount(Reviews, {
      propsData,
      store: new Vuex.Store({
        state: {},
        actions
      })
    });
  });

  it('has a created component', () => {
    expect(wrapper.name()).to.equal('Reviews');
    expect(wrapper.vm.movieId).to.equal(propsData.movieId);
    expect(wrapper.vm.reviews.id).to.equal(undefined);
  });

  it('contiene titulo', () => {
    expect(wrapper.contains('h3')).to.equal(true);
    expect(wrapper.isVueComponent).to.equal(true);
    expect(wrapper.find('h3')[0].element.innerText).to.equal('Reviews');
  });

  it('animacion de carga mietras no alla respuesta de la api', () => {
    expect(wrapper.find('.ui.centered.inline.loader')[0]).to.be.an('object');
  });

  it('calls store action getReviews when component is created', () => {
    expect(actions.getReviews.calledOnce).to.be.equal(true);
    expect(wrapper.vm.reviews).to.be.an('object');
    //expect(wrapper.vm.reviews.id).to.equal(propsData.movieId);
  });


});

//const $route = { name: 'toto' };
