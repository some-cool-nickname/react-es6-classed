/**
 * Created by mikhail on 01.07.15.
 */
var wepback = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/javascript/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      }
    ]
  }
};