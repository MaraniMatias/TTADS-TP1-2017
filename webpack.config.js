const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname, './docs'),
    publicPath: '/',
    filename: 'build.js'
  },
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      enforce: "pre", // preload the jshint loader
      exclude: /node_modules/,
      loader: "eslint-loader"
    }, {
      test: /\.pug$/,
      use: {
        loader: 'pug-loader',
        options: { globals: {} }
      }
    }, {
      test: /\.md$/,
      loader: 'vue-markdown-loader',
      options: { use: [] }
    }, {
      test: /\.(css|less)$/,
      loaders: ['style-loader', 'css-loader', 'less-loader'] // 'postcss-loader'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {}
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    //contentBase: path.join(__dirname, "/"),
    compress: true,
    historyApiFallback: !false,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  module.exports.performance = {
    hints: 'warning',
    //maxAssetSize: 300000,
    //maxEntrypointSize: 3000000
  };
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || [])
    .concat([
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          unused: true,
          dead_code: true,
          warnings: false
        }
      }),
    new webpack.LoaderOptionsPlugin({
        minimize: true
      })
  ]);
}

if (process.env.NODE_ENV === 'testing') {
  module.exports.devtool = '#source-map';
  module.exports.performance.hints = false;
  module.exports.resolve.alias = { 'vue$': 'vue/dist/vue.common.js' };
  module.exports.plugins = (module.exports.plugins || [])
    .concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"testing"'
        }
      })
    ]);
}
