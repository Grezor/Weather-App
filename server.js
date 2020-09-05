require('dotenv').config({
    path: __dirname + '/.env'
})
const OpenWeather = require('./src/services/OpenWeather')
const weatherResponseOneDay = require('./function/apiOneDay')

const express = require( 'express')
const bodyParser = require( 'body-parser')
const cors = require('cors')
const weather = require('./src/controllers/weather')

const router = express()
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

router.use(cors())

//  le moteur de modèle à utiliser ici ejs
router.set('view engine', 'ejs'); 
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

router.get('/api', function(req, res) {
    res.json({
        message: 'welcome weather'
    })
    res.end()
})

const hostPort = process.env.HOST_PORT || 3000
router.listen(hostPort, function(){
    console.log(`listening http://localhost:${hostPort}...`)
})