const express = require( 'express')
const OpenWeather = require( '../services/OpenWeather')
const Mapbox = require( '../services/Mapbox')

const weatherRouter = express.Router()
const openWeatherService = new OpenWeather()
const mapboxService = new Mapbox()

weatherRouter.get('/today', async (req, res) => {
    const result = await openWeatherService.today(req.query.lat, req.query.lon)
    res.json(result)
    res.end()
})

weatherRouter.get('/sevendays', async (req, res) => {
    const result = await openWeatherService.sevendays(req.query.lat, req.query.lon)
    res.json(result)
    res.end()
})

weatherRouter.get('/chartdays', async (req, res) => {
    const result = await openWeatherService.chartdays(req.query.lat, req.query.lon)
    // console.log('weather.js', result)
    res.json(result)
    res.end()
})

weatherRouter.post('/search', async (req, res) => {
    const result = await mapboxService.search(req.body.search)
    res.json(result)
    res.end()
})

module.exports = weatherRouter