/**
 * Created by mikhail on 01.07.15.
 */
var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['jasmine'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?plugins=babel-plugin-rewire'
          },
          {
            test: /\.scss$/,
            loader: "style!css!sass?sourceMap"
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};