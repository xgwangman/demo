'use strict';

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const RaxWebpackPlugin = require('rax-webpack-plugin');

module.exports = {
  target: 'node',
  entry: {
    'index.bundle': path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new RaxWebpackPlugin({
      frameworkComment: true,
      externalBuiltinModules: true,
    }),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'rax'],
      }
    }, {
      test: /\.css$/,
      loader: 'stylesheet-loader'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.(png|jpe?g|gif)$/i,
      loader: 'image-source-loader'
    }]
  },
  watch: true
};