const axios = require ('axios')

class OpenWeather {
  constructor() {
    this.base = 'https://api.openweathermap.org/data/2.5'
    this.options = {
      appid: process.env.APIKEY,
      lang: 'fr',
      units: 'metric',
      wind: 'metric'
    }
  }

  async today(lat, lon) {
    const uri = this.generateUri('/weather')
    const query = {
      lat, lon
    }

    const response = await axios.get(uri, {
      params: {
        ...query,
        ...this.options
      }
    })

    return response.data
  }

  generateUri(endpoint) {
    return `${this.base}${endpoint}`
  }

}

module.exports = OpenWeather
