var child_process = require('child_process');
var n = child_process.fork('./child2.js');
n.on('message', function(m){
  console.log('PARENT got message:', m);
});
n.send({hello: 'world'});
