module.exports = function ( config ) {
  config.set( {
    browsers: [ 'PhantomJS' ],
    frameworks: [ 'mocha', 'sinon-chai', 'phantomjs-shim' ],
    reporters: [ 'spec', 'coverage' ],
    files: [ './index.js' ],
    preprocessors: {
      './index.js': [ 'webpack', 'sourcemap' ]
    },
    webpack: require( '../../webpack.config.js' ),
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  } );
};
