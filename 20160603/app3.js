var EventEmitter = require('events').EventEmitter;
var foo = new EventEmitter();

foo.on('someEvent',function(){
  console.log('event has occured');
});

function bar(){
  console.log('start');
  foo.emit('someEvent');
  console.log('end');
}

// bar();

var connection = function(id){
  console.log('client id: ' + id);
}

foo.on('connection', connection);

foo.emit('connection', 6);
