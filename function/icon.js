const ModuleWeatherIcons = {
    // Icon Api : 1 Day
    getIconOneDay: (weatherIcon) => {
        const weatherIcons = {
            '01d': '/img/clearSky.png',
            '02d': '/img/fewClouds.png',
            '03d': '/img/scatteredClouds.png',
            '04d': '/img/brokenClouds.png',
            '09d': '/img/showerRain.png',
            '10d': '/img/rain.png',
            '11d': '/img/thunderstorm.png',
            '13d': '/img/snow.png',
            '50d': '/img/mist.png',
            '04n': '/img/news/clouds.jpg',
            'err': '/img/error.png',
            '01n': '/img/night/01n.png',
            '02n': '/img/night/02n.png',
            '03n': '/img/night/03n.png',
            // '04n': '/img/night/04n.png',
            '09n': '/img/night/09n.png',
        }
        // pour afficher les icons
        const weatherKey = weatherIcon in weatherIcons ? weatherIcon : 'err'
        return weatherIcons[weatherKey]
    },
    /**
     * Icons météo pour 7 jours
     */
    getIcon7days: (weatherIcon) => {
        const weatherIcons = {
            '01d': '/img/news/clearSky.jpg',
            '02d': '/img/fewClouds.png',
            '03d': '/img/scatteredClouds.png',
            '04d': '/img/brokenClouds.png',
            '09d': '/img/showerRain.png',
            '10d': '/img/news/rain.jpg',
            '11d': '/img/thunderstorm.png',
            '13d': '/img/snow.png',
            '50d': '/img/mist.png',
            '04n': '/img/clouds.png',
            'err': '/img/error.png',
            '01n': '/img/night/01n.png',
            '02n': '/img/night/02n.png',
            '03n': '/img/night/03n.png',
            // '04n': '/img/night/04n.png',
            '09n': '/img/night/09n.png',
        }
        // pour afficher les icons
        const weatherKey = weatherIcon in weatherIcons ? weatherIcon : 'err'
        return weatherIcons[weatherKey]
    }
}

module.exports = ModuleWeatherIcons