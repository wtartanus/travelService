var express = require('express');
var app = express();
var path = require('path');

app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
