var postData = querystring.stringify({
  'msg': 'Hello World！'
});

var options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
};

var req = http.request(options, function(res){
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function(chunk){
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e){
  console.log('problem with request: ' + e.message);
});

// write data to requets body
req.write(postData);
req.end();
