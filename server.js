var express = require('express');
var app = express();

var path = process.cwd();
var port = process.env.PORT || 3500;

app.get("/", function(request, response) {
  var ip = request.headers['x-forwarded-for'] || 
     request.connection.remoteAddress || 
     request.socket.remoteAddress ||
     request.connection.socket.remoteAddress;
     
  var language = request.headers["accept-language"].split(',')[0];
  var software = request.headers['user-agent'].split(') ')[0].split(' (')[1];
  
  
  response.json({
    'ip-address': ip,
    'language': language,
    'software': software
  });
});

app.listen(port);