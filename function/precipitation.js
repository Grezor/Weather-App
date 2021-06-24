const callfunction = require('./functionsApi');
const precipitation = {
  funPrecipitation: (daily) => {
    return {
      dt: callfunction.timestampToDate(daily.dt),
      humidity: Math.round(daily.humidity),
    };
  },

  responseChartPrecipitation: (weatherResponse) => {
    if (!weatherResponse.daily) {
      return {
        weather: null,
        error: 'Erreur',
      };
    }
    const weather = {
      dailies: weatherResponse.daily.map(precipitation.funPrecipitation),
    };
    return {
      weather,
      error: null,
    };
  },
};

module.exports = precipitation;
