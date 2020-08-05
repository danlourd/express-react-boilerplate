// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

var PORT = process.env.PORT || 3020;
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.static('dist'));

const corsOption = {
  origin: 'http://localhost:3010',
};
app.use(cors(corsOption));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
