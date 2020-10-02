<li>lon:  <%= weather.lon %></li>
            <li>timezone: <%= weather.timezone %></li>
            <li>timezoneoffset: <%= weather.timezoneoffset %></li>
            <li>// currents</li>
            <li>dt: <%= weather.dt %></li>
            <li>sunrise: <%= weather.sunrise %></li>
            <li>sunset: <%= weather.sunset %></li>
            <li>temp: <%= weather.temp %></li>
            <li>feels_like: <%= weather.feels_like %></li>
            <li>pressure: <%= weather.pressure %></li>
            <li>humidity: <%= weather.humidity %></li>
            <li>dew_point: <%= weather.dew_point %></li>
            <li>uvi: <%= weather.uvi %></li>
            <li>clouds: <%= weather.clouds %></li>
            <li>visibility: <%= weather.visibility %></li>
            <li>wind_speed: <%= weather.wind_speed %></li>
            <li>wind_deg: <%= weather.wind_deg %></li>
            <li>wind_gust: <%= weather.wind_gust %></li>
            <li>main: <%= weather.icon %></li>
            <li>main: <%= weather.dt %></li>

                              <!-- humidity: daily.humidity,
                  wind_speed: daily.wind_speed,
                  //
                  weather_main: daily.weather.main,
                  weather_icon: daily.weather.icon,
                  // 
                  sunrise: daily.sunrise,
                  sunset: daily.sunset -->

// mapbox 
{# <p><%= JSON.stringify(mapbox) %></p> #}

# Ressources 
- OpenWeather [Infos](https://openweathermap.org/guide)
- Mapbox [Infos](https://docs.mapbox.com/api/search/#geocoding)