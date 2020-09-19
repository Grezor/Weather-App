const icon = require('./icon')
const callfunction = require('./functionsApi')

const api7Days = {
    
    transformDaily: (daily) => {
        return {
            dt: callfunction.timestampToDate(daily.dt),
            icon: icon.getIcon7days(daily.weather[0].icon),
            tempDays: daily.temp.day,
            min: Math.round(daily.temp.min),
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
            sunrise: callfunction.timestampToHour(daily.sunrise),
            sunset: callfunction.timestampToHour(daily.sunset)
        }
    },

    response7days: (weatherResponse) => {
        if (!weatherResponse.daily) {
            return {
                weather: null,
                error: 'Erreur'
            }
        }
        const weather = {
            dailies: weatherResponse.daily.map(api7Days.transformDaily)
        }
        return {
            weather,
            error: null
        }
    }
}

module.exports = api7Days

