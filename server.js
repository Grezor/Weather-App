const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const request = require('request')
const apiKey = '';


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index');
})

app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.city)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})