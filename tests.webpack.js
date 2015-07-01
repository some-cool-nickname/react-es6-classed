/**
 * Created by mikhail on 01.07.15.
 */
//babel-plugin-rewire need this
require('es6-shim');

var context = require.context('./src', true, /-test\.js$/);
context.keys().forEach(context);