require('dotenv').config({
    
  path: __dirname + '/.env'
})
const OpenWeather = require('./src/services/OpenWeather')
const weatherResponseOneDay = require('./function/apiOneDay')
const weatherResponseSevenDay = require('./function/api7Days')
const weatherResponsechartsDay = require('./function/charts')
const express = require( 'express')
const bodyParser = require( 'body-parser')
const cors = require('cors')
const weather = require('./src/controllers/weather')

// const { route } = require('./src/controllers/weather')
// const moon = require('./function/moon')

const router = express()
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())
router.use(cors())
//  le moteur de modèle à utiliser ici ejs
router.set('view engine', 'ejs') 

// Pour utiliser plusieurs répertoires statiques actifs
router.use(express.static('public'))

router.get('/', async function (req, res) {
  const { lat, lon } = req.query
  if (lat === undefined || lon === undefined) {
    res.render('index', {
      weather: null,
      error: null
    })
    return undefined
  }
  const weatherService = new OpenWeather()
  const weatherResponse = await weatherService.today(lat, lon)
  res.render('index', weatherResponseOneDay.transformWeatherResponse(weatherResponse))
})

router.use('/api/weather', weather)

// Route 7 days
router.get('/sevendays', async function (req, res) {
  const { lat, lon } = req.query
  if (lat === undefined || lon === undefined) {
    res.render('api', {
      weather: null,
      error: null
    })
    return undefined
  }
  const weatherService = new OpenWeather()
  const weatherResponse = await weatherService.sevendays(lat, lon)

  res.render('api', weatherResponseSevenDay.response7days(weatherResponse))
})

router.use('/api/sevendays', weather)

// route charts 7 days
router.get('/chartdays', async function (req, res) {
  const { lat, lon } = req.query
  if (lat === undefined || lon === undefined) {
    res.render('charts', {
      weather: null,
      error: null
    })
    return undefined
  }
  const weatherService = new OpenWeather()
  const weatherResponse = await weatherService.chartdays(lat, lon)
  // console.log(weatherResponse)
  res.render('charts', weatherResponsechartsDay.responsecharts(weatherResponse))
})

router.use('/api/chartdays', weather)

// route about 
router.get('/about', function(req, res) {
  res.render('about.ejs')
})

const ENV = process.env.HOST_PORT
const hostPort =  ENV || 3000
router.listen(hostPort, () => {
  console.log(`listening http://localhost:${hostPort}`)
})