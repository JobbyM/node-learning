var fs = require('fs');
var readableStream = fs.createReadStream('wow.txt');
var data = '';
var chunk;

readableStream.setEncoding('utf8');

readableStream.on('data',function(chunk){
  // data += chunk;
  console.log('读取d%字节的数据', chunk.length);
  readableStream.pause();
  console.log('接下来的1秒内不读取数据');
  setTimeout(function(){
    console.log('数据恢复读取');
    readableStream.resume();
  },1000);
});

// readableStream.on('readable',function(){
//   while((chunk=readableStream.read())!==null){
//     data += chunk;
//   }
// });

// readableStream.resume();

readableStream.on('end', function(){
  console.log(data);
  // console.log('数据流到达尾部，未读取任何任务数据');
});
