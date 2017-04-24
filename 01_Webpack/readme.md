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
05_Add login.js and utils.js file
    login.js  -> will be loaded first bc required in the first
     utils.js -> required by all files like Jquery plugin. We dont need to 
                 require in every file....add it to the enty points of webpack config