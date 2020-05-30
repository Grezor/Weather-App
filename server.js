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

app.get('/api2', function (req, res) {
  res.render('api2', {
    weather: null,
    error: null
  });
})
// les icons
const weatherIcons = {
  '01d': '/img/clearSky.png',
  '02d': '/img/fewClouds.png',
  '03d': '/img/scatteredClouds.png',
  '04d': '/img/brokenClouds.png',
  '09d': '/img/showerRain.png',
  '10d': '/img/rain.png',
  '11d': '/img/thunderstorm.png',
  '13d': '/img/snow.png',
  '50d': '/img/mist.png',
  '04n': '/img/clouds.png',
  'err': '/img/error.png',
  '01n': '/img/night/01n.png',
  '02n': '/img/night/02n.png',
  '03n': '/img/night/03n.png',
  '04n': '/img/night/04n.png',
  '09n': '/img/night/09n.png',
}
// pour afficher les icons
function getIcon(weatherIcon) {
  const weatherKey = weatherIcon in weatherIcons ? weatherIcon : 'err'
  return weatherIcons[weatherKey]
}

/**
 * retourne l'heure du levée du soleil
 * Converti miliseconde en timestamp
 * @param {string} return 26/05/2020 à 21:39:21
 */
function sunset(sunsetTime){
  // const dateObject = new Date(sunsetTime * 1000)
  // return dateObject.toLocaleString()
  const unix_timestamp = sunsetTime
  const date = new Date(unix_timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const formattedTime = hours + ':' + minutes.substr(-2);
  return formattedTime
}
/**
 * retourne l'heure du levée du soleil
 * @param {time} sunrise 
 */
function leveeDuSoleil(sunrise){
  const unix_timestamp = sunrise
  const date = new Date(unix_timestamp * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const heureleve = hours + ':' + minutes.substr(-2);
  return heureleve
}

/**
 * @param {*} weatherResponse 
 */
function transformWeatherResponse(weatherResponse) {
  if (!weatherResponse.main) {
    return {
      weather: null,
      error: 'Erreur'
    }
  }

  const weather = {
    name: weatherResponse.name,
    coord : weatherResponse.coord.lon,
    main: weatherResponse.main.humidity,
    temp: Math.round((weatherResponse.main.temp * 100) / 100),
    icon: getIcon(weatherResponse.weather[0].icon),
    humidity: weatherResponse.main.humidity,
    temp_max: weatherResponse.main.temp_max,
    temp_min: weatherResponse.main.temp_min,
    speed: Math.round(weatherResponse.wind.speed * 3.6),
    sunset: sunset(weatherResponse.sys.sunset),
    sunrise: leveeDuSoleil(weatherResponse.sys.sunrise),
    lastUpdate: weatherResponse.lastupdate
  }

  return {
    weather,
    error: null
  }
}

app.post('/', function (req, res) {
  let city = req.body.city;
  const lang = 'fr'
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&units=metric&wind=Metric&appid=${apiKey}&lang=fr`

  request(url, function (err, response, body) {
    if (err) {
      return res.render('index', {
        weather: null,
        error: 'Error, please try again'
      });
    }

    const weatherResponse = JSON.parse(body)
    res.render('index', transformWeatherResponse(weatherResponse));    
  });
})
/**
* Serveur web : 
*/
app.listen(3000, function () {
  console.log('le serveur est sur le port 3000!')
})