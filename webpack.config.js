  'use strict';

const env = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  context: __dirname + '/src',

  entry: {
    main: [
      './main'
    ],
  },

  output: {
    path: __dirname + '/public/assets',
    publicPath: '/assets/',
    filename: '[name].js',
    library: '[name]'
  },

  devtool: env ? 'cheap-inline-module-source-map' : null,

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader/webpack!babel?presets[]=react&presets[]=es2015&presets[]=stage-0',
      // query: {
      //   presets: ['react', 'es2015']
      // }
    },
    {
      test: /\.sass$/,
      loader: ExtractTextPlugin.extract(
        'style',
        'css-loader!resolve-url!postcss-loader!sass-loader?sourceMap'
      )
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css-loader')
    }]
  },

  postcss: [
    autoprefixer({ browsers: ['last 15 versions', '> 1%'] })
  ],

  plugins: [
    new ExtractTextPlugin('[name].css', {allChunks: true, disable: env}),
  ],

  devServer: {
    contentBase: __dirname + '/public',
    hot: true
  }
};

if (env) {
  module.exports.entry.main.unshift(
    'react-hot-loader/patch',
    'webpack-hot-middleware/client'
  );
  module.exports.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

if (!env) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // don't show unreachable variables etc.
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}
