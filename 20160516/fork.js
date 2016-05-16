var child_process = require('child_process');
console.log('__dirname:' + __dirname);
var n = child_process.fork(__dirname + '/child2.js');
n.on('message', function(m){
  console.log('PARENT got message:', m);
});
n.send({hello: 'world'});
