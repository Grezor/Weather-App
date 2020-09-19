// import env
const axios = require ('axios')

class Mapbox {
    
    constructor(){
        this.base = 'https://api.mapbox.com/geocoding/v5'
        this.options = {
            access_token: process.env.APIMAPBOX
        }
    }

    async search(search){
        const uri = this.generateUri(`/mapbox.places/${encodeURIComponent(search)}.json`)

        const response = await axios.get(uri, {
            params: {
                ...this.options,
                limit: 10
            }
        })
        return response.data
    }

    generateUri(endpoint){
        return `${this.base}${endpoint}`
    }
}

module.exports = Mapbox