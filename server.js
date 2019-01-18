var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Serve html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


// Greetings API endpoint
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami", (req, res) => {
  res.json({
    IPaddress: req.headers['x-forwarded-for'],
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
