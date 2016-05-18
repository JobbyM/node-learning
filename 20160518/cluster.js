var cluster = require('cluster');
var os = require('os');
var http = require('http')

if(cluster.isMaster){
  var numWorkers = os.cpus().length;
  console.log('Master cluster setting up ' + numWorkers + ' workers...');
  for(var i = 0; i < numWorkers; i += 1){
    cluster.fork();
  }

  cluster.on('online', function(worker){
    console.log('Worker ' + worker.process.pid + ' is online');
  });

  cluster.on('exit', function(workder, code, signal){
    console.log('Worker ' + worker.process.pid + ' died with code: ' + code +
      ', and signal: ' + signal);
    console.log('Starting a new worker');
    cluster.fork();
  });
  
}else{
  http.createServer(function(req, res){
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);
}
