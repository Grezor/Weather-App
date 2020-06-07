module.exports = {
    /**
    * Couchée du soleil
    * return format heure (21:30)
    */
    sunset: (sunsetTime) => {
        const date = new Date(sunsetTime * 1000)
        const hours = date.getHours()
        const minutes = '0' + date.getMinutes()
        const formattedTime = hours + ':' + minutes.substr(-2)
        return formattedTime
    },
    /**
  * levée du soleil
  * return format heure (05:30)
  */
    sunrise: (sunrise) => {
        const unix_timestamp = sunrise
        const date = new Date(unix_timestamp * 1000)
        const hours = date.getHours()
        const minutes = '0' + date.getMinutes()
        const heureleve = hours + ':' + minutes.substr(-2)
        return heureleve
    }
}
