var express = require('express');
var app = express();
var path = require('path');
var dhondt = require ('dhondt');
var port = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, 'public')));
app.use('/modules', express.static(__dirname + '/node_modules/'));

app.use('/lib', express.static(__dirname + '/lib/'));

app.listen(port, function() {
  console.log('Listening on ' + port);
});