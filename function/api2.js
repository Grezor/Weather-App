const icon2 = require('./icons2')
const api2 = {
    transformDaily: (daily) => {
        return {
            dt: api2.timestampToDate(daily.dt),
            icon: icon2.getIcon2(daily.weather[0].icon),
            tempDays: daily.temp.day,
            min: Math.round(daily.temp.min),
            // max: Math.round(daily.temp.max),
            max: Math.round(daily.temp.max),
            night: Math.round(daily.temp.night),
            eve: daily.temp.eve,
            morn: daily.temp.morn, 
            feels_like_day: daily.feels_like.day,
            feels_like_night: daily.feels_like.night,
            feels_like_eve: daily.feels_like.eve,
            feels_like_morn: daily.feels_like.morn,
            humidity: Math.round(daily.humidity),
            wind_speed: Math.round(daily.wind_speed),
            weather_main: daily.weather[0].main,
            weather_icon: daily.weather[0].icon,
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
    // canicule: (weatherResponse) => {
    //     const temp = weatherResponse.daily.temp.max
    //     return temp
    // },

    respons2: (weatherResponse) => {
        if (!weatherResponse.daily) {
            return {
                weather: null,
                error: 'Erreur'
            }
        }
    
        // console.log(weatherResponse.daily)
        const weather = {
            dailies: weatherResponse.daily.map(api2.transformDaily)
        }
        return {
            weather,
            error: null
        }
    }
}

module.exports = api2

