var express = require('express');
var fs = require('fs');
var buffer = new Buffer(16);

fs.readFile('/bitstarter/index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});

buffer = data;

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
