/* eslint-disable no-undef */
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const weatherR = require('./function/api1')
const weatherR2 = require('./function/api2')
const callfunction = require('./function/functionsApi')

require('dotenv').config({
    path: __dirname + '/.env'
})
// clé
const apiKey = `${process.env.APIKEY}`
const apimapbox = `${process.env.APIMAPBOX}`
//  le moteur de modèle à utiliser ici ejs
app.set('view engine', 'ejs'); 
 // Pour utiliser plusieurs répertoires statiques actifs
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', function (req, res) {
    res.render('index', {
        weather: null,
        error: null
    })
})

app.get('/api', function (req, res) {
    res.render('api', {
        weather: null,
        error: null
    })
})
/**
 * Méteo du Jour
 */
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
        res.render('index', weatherR.transformWeatherResponse(weatherResponse))
    })
})

app.post('/api', function (req, res) {
    const city = req.body.city
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&appid=${apiKey}&units=metric&lang=fr`
    request(url, function (err, response, body) {
        if (err) {
            return res.render('api', {
                weather: null,
                error: 'Une erreur es survenu'
            })
        }
        const weatherResponse = JSON.parse(body)
        res.render('api', weatherR2.respons2(weatherResponse))
    })
})

app.get('/mapbox', function (req, res) {
    const city = encodeURI(req.body.city)
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${apimapbox}`
    request(url, function (err, response, body) {
        if (err) {
            return res.render('api3', {
                weather: null,
                error: 'Une erreur es survenu'
            })
        }
        const weatherResponse = JSON.parse(body)
        res.render('api3', weatherResponse)
    })
})
/**
 * Serveur web : 
 */
app.listen(3000, function () {
    console.log('le serveur est sur le port 3000!')
})