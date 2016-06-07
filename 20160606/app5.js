var koa = require('koa');
var app = koa();

// app.use(function* (next){
//   if(this.path === '/'){
//     this.body = 'we are at home!'
//   }else{
//     yield next;
//   }
// })

// 等同于
app.use(function* (next){
  if(this.path !== '/') return yield next;
  this.body = 'we are at home!'
})

app.listen(3000)
