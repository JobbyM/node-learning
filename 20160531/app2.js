// var fs = require('fs');
//
// fs.createReadStream('wow.txt')
//   .pipe(process.stdout);

// var fs = require('fs');
// var zlib = require('zlib');
//
// fs.createReadStream('wow.txt')
//   .pipe(zlib.createGzip())
//   .pipe(process.stdout);

// process.stdin.pipe(process.stdout)

// process.stdin.setEncoding('utf8');
//
// process.stdin.on('readable', function(){
//   var chunk = process.stdin.read();
//   if(chunk !== null){
//     process.stdout.write('data: ' + chunk);
//   }
// });
//
// process.stdin.on('end', function(){
//   process.stdout.write('end')
// });

// node --harmony app2.js --version
console.log(process.execArgv); // [ '--harmony']
