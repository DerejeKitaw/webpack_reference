var path = require('path');

module.exports = {
    context: path.resolve('js'), //Set relative path for the enty key. So now webpack will see utils.js and app.js inside js directory
    entry: ["./app.js","./utils"],
    output:{
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',//same as what in in the index.html
        filename: "bundle.js"
    },

    devServer: {
        contentBase: 'public' //any reqest from the root is going to come from public
    },
    watch: true,
    module: {
        //preloaders run befor loaders run
        //preloaders is renamed to rule in recent version of webpack

        rules: [
            //Just for now comment this
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'jshint-loader'
            // }
        ],

        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
            //webpack will look for no extensions, then js file then es6
            extensions: ['*','.js','.es6']
        }
}