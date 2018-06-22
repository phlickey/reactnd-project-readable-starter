require('./api-server/server');
var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './readable-client/build', // required, the root of the server file tree
    port: 3000,                       // required, the port to listen
});
 
server.start(function () {
  console.log('Server listening to', server.port);
});