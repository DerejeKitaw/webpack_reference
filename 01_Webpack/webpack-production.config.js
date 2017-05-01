var WebpackStrip = require('strip-loader');

var devConfig = require('./webpack.config.js'); //This will bring all functionality from webpack.config.js
//Just like other loader stripLoader will have 3 keys
var stripLoader = {
    //any js and es6 files
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    //anything we want to strip from our code. In this case console.log
    //loader: WebpackStrip.loader("strip-loader?strip[]=console.log")
    loader: WebpackStrip.loader("sconsole.log")
}

devConfig.module.loaders.push(stripLoader);

// emptyDebug.js
module.exports = function() { return new Function(); };
module.exports = devConfig;