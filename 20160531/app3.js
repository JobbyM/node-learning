// // 读取标准输入，这主要是为了不让当前进程退出
// process.stdin.resume();
//
// process.on('SIGINT', function(){
//   console.log('SIGINT 信号，按Control-D 退出');
// })

// process.on('uncaughtException', function(err){
//   console.error('An uncaught error occurred!');
//   console.error(err.stack);
//   // throw new Error('未捕获错误')
// });
//
// setTimeout(function(){
//   console.log('本行依然执行');
// },500)
//
// process.on('exit', code =>
//   console.log('exiting with code: ' + code))

process.on('SIGTERM', function(){
  console.log('terminating');
  process.exit(1);
});

setTimeout(function(){
  console.log('sending SIGTERM to process %d', process.pid);
  process.kill(process.pid, 'SIGTERM');
}, 500);

setTimeout(function(){
  console.log('never called');
}, 1000);
