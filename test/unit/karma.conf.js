module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha'], // 'sinon-chai', 'phantomjs-shim'],
    reporters: ['spec', 'coverage', 'remap-coverage'], //progress
    //plugins: ['karma-coverage', 'karma-phantomjs-launcher','karma-mocha-reporter'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: require('../../webpack.config.js'),
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'text' },
        { type: 'text-summary' },
        { type: 'html' }
      ]
    }
  });
};
