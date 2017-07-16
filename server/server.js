var express = require('express');
var app     = express();
var path    = require('path');

// Angular
app.use(express.static(path.resolve(__dirname, '../dist')));
app.get('*', function (req, res) {
  var indexFile = path.resolve(__dirname,'../dist/index.html');
  res.sendFile(indexFile);
});

// Server
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('listening on port:' + port);
});
