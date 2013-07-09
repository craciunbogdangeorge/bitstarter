#!/usr/bin/env node

var express = require('express');
var fs = require('fs');
var buffer;

var app = express.createServer(express.logger());

fs.readFile('/home/ubuntu/bitstarter/index.html', function (err, data) {
  if (err) { throw err; }
  buffer = data; 
  console.log(buffer);
});

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
