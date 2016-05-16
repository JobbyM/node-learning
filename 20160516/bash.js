var exec = require('child_process').exec;

// var ls = exec('ls -l', function(error, stdout, stderr){
//   if(error){
//     console.log(error.stack);
//     console.log('Error code: ' + error.code);
//   }
//   console.log('Child Process STDOUT: ' + stdout);
// })

var child = exec('ls -l');

child.stdout.on('data', function(data){
  console.log('stdout: ' + data);
});

child.stderr.on('data', function(data){
  console.log('stderr: ' + data);
});

child.on('close', function(code){
  console.log('closing code: ' + code);
});
