var http = require('http'),
 webServer = require('./lib/webserver');

var server = http.createServer();
 
var webServer = new webServer(server);
server.listen(8124);

console.log('Server running at http://127.0.0.1:8124/');

