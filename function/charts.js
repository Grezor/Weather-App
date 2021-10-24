const callfunction = require('./functionsApi');
const api7Dayschart = {
  transformDaily: (daily) => {
    return {
      dt: callfunction.timestampToDate(daily.dt),
      min: Math.round(daily.temp.min),
      max: Math.round(daily.temp.max),
      night: Math.round(daily.temp.night),
    };
  },

  responsecharts: (weatherResponse) => {
    if (!weatherResponse.daily) {
      return {
        weather: null,
        error: 'Erreur',
      };
    }
    const weather = {
      dailies: weatherResponse.daily.map(api7Dayschart.transformDaily),
    };
    return {
      weather,
      error: null,
    };
  },
};

module.exports = api7Dayschart;
