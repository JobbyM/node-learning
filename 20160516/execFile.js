var child_process = require('child_process');

var path = '.';
child_process.execFile('/bin/ls', ['-l', path], function(err, result){
  console.log(result);
});
