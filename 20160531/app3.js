// // 读取标准输入，这主要是为了不让当前进程退出
// process.stdin.resume();
//
// process.on('SIGINT', function(){
//   console.log('SIGINT 信号，按Control-D 退出');
// })

process.on('uncaughtException', function(err){
  console.error('An uncaught error occurred!');
  console.error(err.stack);
  // throw new Error('未捕获错误')
});

setTimeout(function(){
  console.log('本行依然执行');
},500)
