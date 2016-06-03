var EventEmitter = require('events').EventEmitter;
var foo = new EventEmitter(); 
//
// foo.on('someEvent',function(){
//   console.log('event has occured');
// });
//
// function bar(){
//   console.log('start');
//   foo.emit('someEvent');
//   console.log('end');
// }
//
// // bar();
//
// var connection = function(id){
//   console.log('client id: ' + id);
// }
//
// foo.on('connection', connection);
//
// foo.emit('connection', 6);

foo.on('connection', baz);


foo.on('newListener', function(evtName){
  console.log('New Listener: ' + evtName);
});

foo.on('removeListener', function(evtName){
  console.log('Removed Listener: ' + evtName);
});

function baz(){}

foo.on('save-user', baz);
foo.removeListener('save-user',baz);
