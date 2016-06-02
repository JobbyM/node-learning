var fs = require('fs');
var readableStream = fs.createReadStream('wow.txt');
var data = '';
var chunk;

readableStream.setEncoding('utf8');

// readableStream.on('data',function(chunk){
//   data += chunk;
// });

readableStream.on('readable',function(){
  while((chunk=readableStream.read())!==null){
    data += chunk;
  }
});

readableStream.on('end', function(){
  console.log(data);
});
