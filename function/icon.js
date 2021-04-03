const ModuleWeatherIcons = {
    // Icon Api : 1 Day
    getIconOneDay: (weatherIcon) => {
        const weatherIcons = {
            '01d': '/img/01d.png',
            '02d': '/img/02d.png',
            '03d': '/img/03d.png',
            '04d': '/img/04d.png',
            '09d': '/img/09d.png',
            '10d': '/img/10d.png',
            '11d': '/img/11d.png',
            '13d': '/img/13d.png',
            '50d': '/img/50d.png',
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
            '01d': '/img/01d.png',
            '02d': '/img/02d.png',
            '03d': '/img/03d.png',
            '04d': '/img/04d.png',
            '09d': '/img/09d.png',
            '10d': '/img/10d.png',
            '11d': '/img/11d.png',
            '13d': '/img/13d.png',
            '50d': '/img/50d.png',
        }
        // pour afficher les icons
        const weatherKey = weatherIcon in weatherIcons ? weatherIcon : 'err'
        return weatherIcons[weatherKey]
    },

    /**
     * Icon moon phase
     * @param {*} MoonIcon 
     * @returns path de l'image
        // 0 => New Moon
        // 1 => Waxing Crescent Moon
        // 2 => Quarter Moon
        // 3 => Waxing Gibbous Moon
        // 4 => Full Moon
        // 5 => Waning Gibbous Moon
        // 6 => Last Quarter Moon
        // 7 => Waning Crescent Moon
     */
    getIconMoon: (MoonIcon) => {
        const MoonIcons = {
            '0': '/img/moon/newMoon.png',
            '1': '/img/moon/waxingCrescent.png',
            '2': '/img/moon/firstQarter.png',
            '3': '/img/moon/waxingGibbous.png',
            '4': '/img/moon/fullMoon.png',
            '5': '/img/moon/wanningGibbous.png',
            '6': '/img/moon/lastQarter.png',
            '7': '/img/moon/waningcresent.png',
        }

        const MoonKey = MoonIcon in MoonIcons ? MoonIcon : 'err'
        return MoonIcons[MoonKey]
        
    }
}

module.exports = ModuleWeatherIcons