var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
  // fs.readFile('data.txt', function readData(err, data){
  //   response.writeHead(200, {
  //     'Content-Type':'text/plain'
  //   });
  //   response.end(data)
  // });

  // or
  fs.createReadStream(`${__dirname}/uploadfile.html`).pipe(response);
}).listen(8080, '127.0.0.1');

console.log('Server running on port 8080.');
