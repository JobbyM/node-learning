var koa = require('koa');
var app = koa();

// app.use(function* (next){
//   var start = new Date;
//   yield next;
//   var ms = new Date - start;
//   console.log('%s %s - %s', this.method, this.url, ms);
// })
// app.use(function* (){
//   this.body = 'Hello World';
// });

// app.use(function* (){
//   this.body = "header\n";
//   yield saveResults.call(this);
//   this.body += "footer\n"
// });
//
// function* saveResults(){
//   this.body += "Results Saved!\n"
// }

app.use(function* (next){
  console.log('>> one');
  yield next;
  console.log('<< one');
})

app.use(function* (next){
  console.log('>> two');
  this.body = 'two'
  yield next;
  console.log('<< tow');
})

app.use(function* (next){
  console.log('>> three');
  yield next;
  console.log('<< three');
})

function logger(format){
  return function* (next){
    var str = format
      .replace(':method', this.method)
      .replace(':url', this.url);

    console.log(str);
    yield next;
  }
}

app.use(logger(':method :url'));

app.listen(3000);
