
var express = require('express')
var app = express()

const PORT = 8080;

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8080, function () {
  console.log('Listening on port 8080!')
})
