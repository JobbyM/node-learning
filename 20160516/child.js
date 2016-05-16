// child.js
var exec = require('child_process').exec;

// exec('node -v', function(error, stdout, stderr){
//   console.log('stdout: ' + stdout);
//   console.log('stderr: ' + stderr);
//   if(error !== null){
//     console.log('exec error: ' + error);
//   }
// })

var path = ';user input';
exec('ls -l ' + path, function(err, data){
  console.log(data);
})
