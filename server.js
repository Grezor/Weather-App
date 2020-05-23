const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()
// api meteo
require('dotenv').config({
  path: __dirname + '/.env'
})
const apiKey = `${process.env.APIKEY}`


app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {
    weather: null,
    error: null
  });
})
// les icons
const weatherIcons = {
  '04d': 'sun.png',
  '04n': 'moon.png',
  'err': 'err.png'
}
// pour afficher les icons
function getIcon(weatherIcon) {
  const weatherKey = weatherIcon in weatherIcons ? weatherIcon : 'err'
  return weatherIcons[weatherKey]
}

function transformWeatherResponse(weatherResponse) {
  if (weatherResponse.main == undefined) {
    return {
      weather: null,
      error: 'Error, please try again'
    }
  }
  
  const weather = {
    temp: Math.round((weatherResponse.main.temp * 100) / 100),
    icon: getIcon(weatherResponse.weather[0].icon),
    humidity: weatherResponse.main.humidity
  }

  return {
    weather,
    error: null
  }
}

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr`

  request(url, function (err, response, body) {
    if (err) {
      return res.render('index', {
        weather: null,
        error: 'Error, please try again'
      });
    }

    const weatherResponse = JSON.parse(body)
    res.render('index', transformWeatherResponse(weatherResponse))
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})