var express = require('express');
var fs = require('fs');
var buffer;

fs.readFile('/bitstarter', function (err, data) {
  if (err) { throw err; }
  buffer = data;
  console.log(buffer);    
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
