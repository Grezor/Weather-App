const axios = require ('axios')
require('dotenv').config()
/**
 * constructeur
 */
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
  /**
   * Méteo du jour
   * @param {int} lat 
   * @param {int} lon 
   */
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
  /**
   * Meteo sur 7 jours
   * @param {int} lat 
   * @param  {int} lon 
   */
  async sevendays(lat, lon) {
    const uri = this.generateUri('/onecall')
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
  /**
   * Charts 7 days
   * @param {*} lat 
   * @param {*} lon 
   */
  async chartdays(lat, lon) {
    const uri = this.generateUri('/onecall')
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
