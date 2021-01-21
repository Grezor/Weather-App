const icon = require('./icon')
const callfunction = require('./functionsApi')
const apiOneDay = {


    transformWeatherResponse: (weatherResponse) => {
        if (!weatherResponse.main) {
            return {
                weather: null,
                error: 'Erreur'
            }
        }
    
        const weather = {
            lon: weatherResponse.coord.lon,
            lat: weatherResponse.coord.lat,
            name: weatherResponse.name,
            icon: icon.getIconOneDay(weatherResponse.weather[0].icon),
            main: weatherResponse.main.humidity,
            description:  weatherResponse.weather[0].description,
            temp: Math.round((weatherResponse.main.temp * 100) / 100),
            temp_max: Math.round(weatherResponse.main.temp_max),
            temp_min: Math.round(weatherResponse.main.temp_min),
            pressure: weatherResponse.main.pressure,
            humidity: weatherResponse.main.humidity,
            winddeg: weatherResponse.wind.deg,
            clouds: weatherResponse.clouds.all,
            speed: Math.round(weatherResponse.wind.speed * 3.6),
            sunset: callfunction.sunsetAndSunrise(weatherResponse.sys.sunset),
            sunrise: callfunction.sunsetAndSunrise(weatherResponse.sys.sunrise),
        }

        return {
            weather,
            error: null
        }
    }
}

module.exports = apiOneDay
