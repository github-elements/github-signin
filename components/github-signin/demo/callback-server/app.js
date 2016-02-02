var express = require('express');
var request = require('request');
var app = express();

app.get('/', function (req, res) {
  var postOptions = {
    qs: {
      client_id: 'caa5f6ff9c79238800ab',
      client_secret: process.argv[2],
      code: req.query.code,
    },
    json: true
  };
  request.post('https://github.com/login/oauth/access_token',
    postOptions,
    function(error, response, body) {
      res.render('view.ejs', {
        token: body.access_token
      });
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
