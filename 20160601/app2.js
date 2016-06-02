var Readable = require('stream').Readable;
var rs = Readable();

var c = 65;
rs._read = function(){
  rs.push(String.fromCharCode(c++))
  if( c > 'Z'.charCodeAt(0)){
    rs.push(null);
  }
}

rs.pipe(process.stdout);
