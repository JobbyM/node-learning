var http = require('http');

function getTestPersonalLoginCredentials(callback){
  return http.get({
    host: 'personatestuser.org',
    path: '/email'
  }, function(response){
    var body = '';

    response.on('data', function(d){
      body += d;
    });

    response.on('end', function(){
      var parsed = JSON.parse(body);
      callback({
        email: parsed.email,
        password: parsed.pass
      });
    });
  });
}

getTestPersonalLoginCredentials(function(data){
  console.log(data);
});
