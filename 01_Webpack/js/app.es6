// require('./login');
import {login} from './login'
login ('admin', 'wrongpass');
//by default webpack give js extentions for a file. So we need extention resolver
document.write("Hello World from webpack dev in watch mode!!");

console.log('App loaded');
