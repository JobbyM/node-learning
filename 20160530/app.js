// var http = require('http');
//
// http.createServer(function(request, response){
//   response.writeHead(200,{
//     'Content-Type': 'text/plain'
//   });
//   response.end('Hello World!\n');
// }).listen(8080,'127.0.0.1');
//
// console.log('Server running on port 8080.');

// var http = require('http');
// var fs = require('fs');
//
// http.createServer(function(request, response){
//   // fs.readFile('data.txt', function readData(err, data){
//   //   response.writeHead(200, {
//   //     'Content-Type':'text/plain'
//   //   });
//   //   response.end(data)
//   // });
//
//   // or
//   fs.createReadStream(`${__dirname}/index.html`).pipe(response);
// }).listen(8080, '127.0.0.1');
//
// console.log('Server running on port 8080.');


var http = require('http');

http.createServer(function(req, res){
  // home page
  if(req.url == '/'){
    res.writeHead(200,{
      'Content-Type':'text/html'
    });
    res.end('Welcome to the homepage!');
  }
  // about page
  else if(req.url == '/about'){
    res.writeHead(200,{
      'Content-Type':'text/html'
    });
    res.end('Welcom to the about page!');
  }
  // 404 error
  else {
    res.writeHead(200,{
      'Content-Type':'text/plain'
    });
    res.end('404 error! File not found.');
  }
}).listen(8080, 'localhost');

console.log('Server running on port 8080.');
