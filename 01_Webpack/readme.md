01_run: webpack ./app.js bundle.js

02_after creating webpack.config file run webpack

03_to run webpack in watch mode
    webpack --watch
    or
    on webpack.config file add watch: true
04_install webpack server globaly 
    npm install webpack-dev-server -g

    start the server by 
        webpack-dev-server
        http://localhost:8080 to see the page

        to see webpack is ready you can add
        http://localhost:8080/webpack-dev-server/

    If you want to run web pack with out app but with auto watch
    use 
        `webpack-dev-server --inline`
05_Add login.js and utils.js file
    login.js  -> will be loaded first bc required in the first
     utils.js -> required by all files like Jquery plugin. We dont need to 
                 require in every file....add it to the enty points of webpack config
06_Using Loaders
    add package.json file and add babel , jshint
    then npm install to install all from the package.json file
07_Creating a Start Script 
     "scripts": {
        "start": "webpack-dev-server"
     }
     now can run npm start

09_The difference between development and production webpack
    To minify bundle file and ri=un web pack
        webpack -p     `Will minimize the bundle.js file in command line`

    To strip some item we need to install 
        npm install strip-loader  --save-dev
        `This will install stip-loader plug in`

    Create production webpack config file just for production
        webpack-production.config.js
        To run this
        webpack --config webpack-production.config.js -p
        `-p is to minify the out put`
        npm install http-server -g to install http server and run your app
        using http-server. Now all the consol.log shouldnt be removed in production.
        `Note if you run npm start it will use the default web.config.js and you will not see the consol.log striped out`