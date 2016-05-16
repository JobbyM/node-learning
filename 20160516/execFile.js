var child_process = require('child_process');

var path = '.';
// child_process.execFile('/bin/ls', ['-l', path], function(err, result){
//   console.log(result);
// });

var ls = child_process.spawn('ls ', ['-l', path]);
ls.stdout.on('data', function(data){
  console.log('stdout: ' + data);
});

ls.stderr.on('data', function(data){
  console.log('stderr: ' + data);
});

ls.on('close', function(code){
  console.log('child process exited with code : ' + code);
});
