const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()
// api meteo
require('dotenv').config({
  path: __dirname + '/.env'
})
// clé
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
  '01d': '/public/img/clearSky.png',
  '02d': '/public/img/fewClouds.png',
  '03d': '/public/img/scatteredClouds.png',
  '04d': '/public/img/brokenClouds.png',
  '09d': '/public/img/showerRain.png',
  '10d': '/public/img/rain.png',
  '11d': '/public/img/thunderstorm.png',
  '13d': '/public/img/snow.png',
  '50d': '/public/img/mist.png',
  'err': 'err.png'
}
// pour afficher les icons
function getIcon(weatherIcon) {
  const weatherKey = weatherIcon in weatherIcons ? weatherIcon : 'err'
  return weatherIcons[weatherKey]
}
/**
 * @param {*} weatherResponse 
 */
function transformWeatherResponse(weatherResponse) {
  if (! weatherResponse.main) {
    return {
      weather: null,
      error: 'Erreur'
    }
  }

  const weather = {
    name: weatherResponse.name,
    temp: Math.round((weatherResponse.main.temp * 100) / 100),
    icon: getIcon(weatherResponse.weather[0].icon),
    humidity: weatherResponse.main.humidity,
    temp_max: weatherResponse.main.temp_max,
    temp_min: weatherResponse.main.temp_min,
    speed: weatherResponse.wind.speed,
  }

  return {
    weather,
    error: null
  }
}

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr&wind=Imperial`

  request(url, function (err, response, body) {
    if (err) {
      return res.render('index', {
        weather: null,
        error: 'Error, please try again'
      });
    }

    const weatherResponse = JSON.parse(body)
    // const text = `il fait ${weatherResponse.main.humidity}`
    // res.render('index', {weather: text, error: null} );
    // let message = `It's ${weatherResponse.main.temp} degrees in ${weatherResponse.name}! ${weatherResponse.wind.speed} / ${weatherResponse.main.temp_max} "max"/ 
    //   ${weatherResponse.main.temp_min} !`;
    // res.render('index', {weather: message, error :null});

    // solution 2 : 
    // const weatherResponse = JSON.parse(body)
    res.render('index', {weather: weatherResponse, error :null});
    
  });
})
/**
* Serveur web : 
*/
app.listen(3000, function () {
  console.log('le serveur est sur le port 3000!')
})