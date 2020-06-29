const icon = require('./icon')
const api = {
    /**
    * Couchée du soleil et lever
    * return format heure (21:30)
    */
    sunsetAndSunrise: (clock) => {
        const date = new Date(clock * 1000)
        const hours = date.getHours()
        const minutes = '0' + date.getMinutes()
        const formattedTime = hours + ':' + minutes.substr(-2)
        return formattedTime
    },
    /**
     * 
     */
    transformWeatherResponse: (weatherResponse) => {
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
            sunset: api.sunsetAndSunrise(weatherResponse.sys.sunset),
            sunrise: api.sunsetAndSunrise(weatherResponse.sys.sunrise),
        }
        return {
            weather,
            error: null
        }
    }
}

module.exports = api

