var fs = require('fs');
var readableStream = fs.createReadStream('wow.txt');
var data = '';
var chunk;

readableStream.setEncoding('utf8');

// readableStream.on('data',function(chunk){
//   data += chunk;
// });

// readableStream.on('readable',function(){
//   while((chunk=readableStream.read())!==null){
//     data += chunk;
//   }
// });

readableStream.resume();

readableStream.on('end', function(){
  // console.log(data);
  console.log('数据流到达尾部，未读取任何任务数据');
});
