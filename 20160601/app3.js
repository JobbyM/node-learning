// var fs = require('fs');
//
// var writer = fs.createWriteStream('write.txt');
//
// for(var i = 0; i < 100; i ++){
//   writer.write('hello, #' + i + '!\n');
// }
// writer.end('this is the end\n');
// writer.on('finish', function(){
//   console.error('all writes are now complete.');
// })

var fs = require('fs');
var assert = require('assert');

var writer = fs.createWriteStream('write.txt');
var reader = fs.createReadStream('wow.txt');
// writer.on('pipe',function(src){
//   console.error('something is piping into the writer');
//   assert.equal(src, reader);
// });
// reader.pipe(writer);

writer.on('unpipe', function(src){
  console.error('something has stopped piping into the writer');
  assert.equal(src,reader);
});
reader.pipe(writer);
reader.unpipe(writer);
