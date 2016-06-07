var koa = require('koa');
var app = koa();

var Router = require('koa-router');

var myRouter = new Router();

myRouter.get('/',function* (){
  this.response.body = 'Hello World!'
})

app.use(myRouter.routes())
// app.use(function* (next){
//   if(this.path === '/'){
//     this.body = 'we are at home!'
//   }else{
//     yield next;
//   }
// })

// // 等同于
// app.use(function* (next){
//   if(this.path !== '/') return yield next;
//   this.body = 'we are at home!'
// })

// // normal route
// app.use(function* (next){
//   if(this.path !== '/'){
//     return yield next;
//   }
//   this.body = 'hello world'
// });
//
// // /404 route
// app.use(function* (next){
//   if(this.path !== '/404'){
//     return yield next;
//   }
//   this.body = 'page not found'
// })
//
// // /500 route
// app.use(function* (next){
//   if(this.path !== '/500'){
//     return yield next;
//   }
//   this.body = 'internal server error'
// })

app.listen(3000)
