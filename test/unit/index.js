// require all test files (files that ends with .spec.js)
import Vue from 'vue';
import Vuex from 'vuex';
Vue.config.productionTip = false;
Vue.use(Vuex);

const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/);
srcContext.keys().forEach(srcContext);
