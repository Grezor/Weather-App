/* eslint-disable no-undef */
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

const weatherR = require('./function/api1')
const weatherR2 = require('./function/api2')
// const { json } = require('body-parser')

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

app.get('/api', function (req, res) {
    res.render('api', {
        weather: null,
        error: null
    })
})

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
/**
 * Serveur web : 
 */
app.listen(3000, function () {
    console.log('le serveur est sur le port 3000!')
})