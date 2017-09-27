module.exports = {
  extends: [
  //"airbnb-base",
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  env: {
    browser: true,
    node: true,
    mocha: true,
    jasmine: true,
    phantomjs: true
  },
  globals: {
    'Vue': true,
    'VueRouter': true,
    'Vuex': true,
    'axios': true,
    'state': true,
    'commit': true
  }
};
