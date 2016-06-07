var koa = require('koa');
var app = koa();

var Router = require('koa-router');

var myRouter = new Router();

// myRouter.get('/',function* (){
//   this.response.body = 'Hello World!'
// })

// // /programming/how-to-node
// myRouter.get('/:category/:title', function* (next){
//   console.log(this.params);
//   // { category: 'programming', title: 'how-to-node' }
//   this.response.body = 'Hello World!'
// })

myRouter
  .get('/users/:user', function* (next){
    this.body = this.user;
  })
  .param('user', function* (id, next){
    var users = ['0号用户','1号用户','2号用户']
    this.user = users[id];
    if(!this.user) return this.status = 404;
    yield next;
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
