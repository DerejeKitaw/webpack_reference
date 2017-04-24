module.exports = {
    entry: ["./app.js","./utils"],
    output:{
        filename: "bundle.js"
    },
    watch: true,
    module: {
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
            extensions: ['','.js','.es6']
        }
}