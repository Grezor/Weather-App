const functionApi = {
    /**
     * API 7 jours 
    * Convertie le timestamp du couché et levé du soleil en heure
    */
    timestampToHour: (clock) => {
        const date = new Date(clock * 1000)
        const hours = date.getHours()
        const minutes = '0' + date.getMinutes()
        const formattedTime = hours + ':' + minutes.substr(-2)
        return formattedTime
    },

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
    * API 2 
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

    currentYear: () => {
        const now = new Date()
        const currentyear = now.getFullYear()
        return currentyear;
    }

}
module.exports = functionApi