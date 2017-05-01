module.exports = {
    entry: ["./app.js","./utils"],
    output:{
        filename: "public/bundle.js"
    },
    watch: true,
    module: {
        //preloaders run befor loaders run
        //preloaders is renamed to rule in recent version of webpack

         rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
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