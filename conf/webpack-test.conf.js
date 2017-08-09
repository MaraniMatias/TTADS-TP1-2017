/*
 * Configuracion para test
 */
const webpack = require('webpack');
module.exports = {
  module: {
    loaders: [{
      test: /\.json$/,
      loaders: [
        'json-loader'
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      enforce: 'pre'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: [
        'babel-loader'
      ]
    }, {
      test: /\.vue$/,
      loaders: [
        'vue-loader'
      ]
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        minimize: true
      },
      debug: true
    })
  ],
  devtool: 'source-map'
};

