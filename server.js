/**
 * Created by mikhail on 01.07.15.
 */
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var helper = require('./config.helper');
var webpack = require('webpack');

function onServerStart (err) {
  if (err) {
    throw err;
  }

  console.log('Client source listening at ' + helper.path);
}

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
  historyApiFallback: true
}).listen(helper.port, 'localhost', onServerStart);