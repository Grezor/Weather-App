const icon2 = require('./icons2')
const api2 = {
    transformDaily: (daily) => {
        return {
            dt: api2.timestampToDate(daily.dt),
            icon: icon2.getIcon2(daily.weather[0].icon),
            tempDays: daily.temp.day,
            min: daily.temp.min,
            max: daily.temp.max,
            night: daily.temp.night,
            eve: daily.temp.eve,
            morn: daily.temp.morn, 
            //
            feels_like_day: daily.feels_like.day,
            feels_like_night: daily.feels_like.night,
            feels_like_eve: daily.feels_like.eve,
            feels_like_morn: daily.feels_like.morn,
            // 
            humidity: daily.humidity,
            wind_speed: daily.wind_speed,
            //
            weather_main: daily.weather[0].main,
            weather_icon: daily.weather[0].icon,
            // 
            sunrise: api2.timestampToHour(daily.sunrise),
            sunset: api2.timestampToHour(daily.sunset)
        }
    },
    /**
    * Convertie timestamp en Date
    * retourne la date : J/M/A
    */
    timestampToDate: (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000)
        const year = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(date)
        const month = new Intl.DateTimeFormat('fr', { month: '2-digit' }).format(date)
        const day = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(date)
        return `${day}/${month}/${year}`
    },
    /**
    * Convertie le timestamp du couché et levé du soleil
    * en heure
    */
    timestampToHour: (clock) => {
        const date = new Date(clock * 1000)
        const hours = date.getHours()
        const minutes = '0' + date.getMinutes()
        const formattedTime = hours + ':' + minutes.substr(-2)
        return formattedTime
    },

    respons2: (weatherResponse) => {
        if (!weatherResponse.daily) {
            return {
                weather: null,
                error: 'Erreur'
            }
        }
    
        console.log(weatherResponse.daily)
        const weather = {
            // coord: weatherResponse.current.coord,
            latitude: weatherResponse.lat,
            lon: weatherResponse.lon,
            timezone: weatherResponse.timezone,
            timezoneoffset: weatherResponse.timezone_offset,
            icon: icon2.getIcon2(weatherResponse.current.weather.icon),
            //daily
            dailies: weatherResponse.daily.map(api2.transformDaily)
            // dt: weatherResponse.daily[0].dt
            // currents
            // dt: weatherResponse.current.dt,
            // sunrise: weatherResponse.current.sunrise,
            // sunset: weatherResponse.current.sunset,
            // temp: weatherResponse.current.temp,
            // feels_like: weatherResponse.current.feels_like,
            // pressure: weatherResponse.current.pressure,
            // humidity: weatherResponse.current.humidity,
            // dew_point: weatherResponse.current.dew_point,
            // uvi: weatherResponse.current.uvi,
            // clouds: weatherResponse.current.clouds,
            // visibility: weatherResponse.current.visibility,
            // wind_speed: weatherResponse.current.wind_speed,
            // wind_deg: weatherResponse.current.wind_deg,
            // wind_gust: weatherResponse.current.wind_gust,
        }
        return {
            weather,
            error: null
        }
    }
}

module.exports = api2

