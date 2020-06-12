/* eslint-disable no-undef */
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

const {
    sunset,
    sunrise
} = require('./function/temp')
const icon = require('./function/icon')


// api meteo
require('dotenv').config({
    path: __dirname + '/.env'
})
// clé
const apiKey = `${process.env.APIKEY}`

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('index', {
        weather: null,
        error: null
    })
})

app.get('/api2', function (req, res) {
    res.render('api2', {
        weather: null,
        error: null
    })
})

function transformWeatherResponse(weatherResponse) {
    if (!weatherResponse.main) {
        return {
            weather: null,
            error: 'Erreur'
        }
    }

    const weather = {
        name: weatherResponse.name,
        coord: weatherResponse.coord.lon,
        main: weatherResponse.main.humidity,
        temp: Math.round((weatherResponse.main.temp * 100) / 100),
        icon: icon.getIcon(weatherResponse.weather[0].icon),
        humidity: weatherResponse.main.humidity,
        temp_max: weatherResponse.main.temp_max,
        temp_min: weatherResponse.main.temp_min,
        speed: Math.round(weatherResponse.wind.speed * 3.6),
        sunset: sunset(weatherResponse.sys.sunset),
        sunrise: sunrise(weatherResponse.sys.sunrise),
    }
    return {
        weather,
        error: null
    }
}

app.post('/', function (req, res) {

    const city = req.body.city
    const lang = 'fr'
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&units=metric&wind=Metric&appid=${apiKey}&lang=fr`

    request(url, function (err, response, body) {
        if (err) {
            return res.render('index', {
                weather: null,
                error: 'Une erreur es survenu'
            })
        }

        const weatherResponse = JSON.parse(body)
        res.render('index', transformWeatherResponse(weatherResponse))
    })
})
/**
 * Serveur web : 
 */
app.listen(3000, function () {
    console.log('le serveur est sur le port 3000!')
})