require('dotenv').config({
    path: __dirname + '/.env'
})

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

router.get('/', function (req, res) {
    res.render('index', {
        weather: null,
        error: null
    })
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
    console.log(`listening *:${hostPort}...`)
})