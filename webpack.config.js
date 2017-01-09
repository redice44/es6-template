var path = require('path');
var webpack = require('webpack');

var config = {
  entry: {
    'main': './src/boot.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
