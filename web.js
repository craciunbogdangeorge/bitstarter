var express = require('express');
var fs = require('fs');
var buffer;

var app = express.createServer(express.logger());

buffer = fs.readFileSync('/home/ubuntu/bitstarter/index.html');

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
