var express = require('express');
var request = require('request');
var cors = require('cors');
var Feed = require('rss-to-json');

var app = express();
app.use(cors());
module.exports.app = app;
app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  if(typeof req.query.rss == 'undefined') {
    return res.json({message: 'URL not valid'});
  }
  var url = req.query.rss;

  Feed.load(url, function(err, rss){
    return res.json(rss);
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
