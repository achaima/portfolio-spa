var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
app.use(express.static('./node_modules'));

app.listen(PORT, function() {
  console.log('App is listening on port', PORT);
});

module.export = app;
