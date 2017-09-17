/**
 * build weex-rax-examples
 * 
 * shell: webpack config=scripts/demo
 */
'use strict';

const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config');

let compiler = webpack(config);

const argv = process.argv;
const isBuild = argv[2] === '-b';

if (!isBuild) {
  new WebpackDevServer(compiler, {
    hot: true,
    disableHostCheck: true
  }).listen(3000, function() {
    console.log('Run at http://0.0.0.0:3000/demo/public');
  });
} else {
  compiler.run(function(err, stats) {
    let options = {
      colors: true,
      chunks: false,
      errorDetails: true,
    };
    console.log(stats.toString(options));
  });
}