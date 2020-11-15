const callfunction = require('./functionsApi')
const api7Dayschart = {
    
    transformDaily: (daily) => {
        return {
            dt: callfunction.timestampToDate(daily.dt),
            min: Math.round(daily.temp.min),
            max: Math.round(daily.temp.max),
            night: Math.round(daily.temp.night),
        }
    },

    responsecharts: (weatherResponse) => {
        if (!weatherResponse.daily) {
            return {
                weather: null,
                error: 'Erreur'
            }
        }
        const weather = {
            dailies: weatherResponse.daily.map(api7Dayschart.transformDaily)
        }
        return {
            weather,
            error: null
        }
    },

    // createCharts: (weatherResponse) => {
    //     new Chart(document.getElementById("bar-chart"), {
    //         type: 'bar',
    //         data: {
    //           labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    //           datasets: [
    //             {
    //               label: "Population (millions)",
    //               backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
    //               data: [2478,5267,734,784,433]
    //             }
    //           ]
    //         },
    //         options: {
    //           legend: { display: false },
    //           title: {
    //             display: true,
    //             text: 'Predicted world population (millions) in 2050'
    //           }
    //         }
    //     });
    //     return Chart;
    // }
}

module.exports = api7Dayschart