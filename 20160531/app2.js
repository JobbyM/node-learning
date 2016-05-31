// var fs = require('fs');
//
// fs.createReadStream('wow.txt')
//   .pipe(process.stdout);

var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('wow.txt')
  .pipe(zlib.createGzip())
  .pipe(process.stdout);
