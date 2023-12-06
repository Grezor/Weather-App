![WeatherApp](https://user-images.githubusercontent.com/38507456/86512535-65c7e580-be03-11ea-8833-eabacd5c92c3.png)

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Technologies](#technologies)
- [Installation](#installation)
- [Packages](#packages)
- [Start](#start)
- [Illustration](#illustration)
  - [weather of the day](#weather-of-the-day)
  - [Page About](#page-about)
- [API](#api)
- [Functionality](#functionality)
- [Use](#use)
- [Project status](#project-status)
- [Improvement](#improvement)
- [Contribute](#contribute)
- [Author](#author)


> **⚠️ Warning**
>
> Update packages: 06/12/2023


## Introduction
I was tired of going out and seeing what the weather was like outside. Tired of using the google weather application.
This simple weather application will only display the current weather for a given area.

Also, I always wanted to know how a REST API consumption works.

While learning NodeJS, I wanted to do something simple and fast. This project, is a web application allowing me to
display the weather, temperature or humidity, wind, 1 week forecast...

## Requirements
- [Node.JS](https://nodejs.org/en/download/) (v14/v16)
- [Git](https://git-scm.com/download/)
- [Postman](https://www.postman.com/downloads/) / - [Insomnia](https://insomnia.rest/download)

extension chrome : [JSON
Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=fr)
## Technologies
```
- Node.JS ^16.0.0
- Javascript
- CSS
- Framework CSS (tailwindcss)
```
## Installation

**Repository update : 11/06/2022**

- On Github, go to the main page of the project
- Open a terminal, or git bash
- Replace the current working directory with the location where you want to clone it.
- Type ```git clone https://github.com/Grezor/Weather-App.git```
press on Entry
  
## Packages
- Express [Infos](https://expressjs.com/fr/) / [npm](https://www.npmjs.com/package/express)
- ESLINT [Infos](https://www.npmjs.com/package/eslint)
- Nodemon [infos](https://www.npmjs.com/package/nodemon)
- Axios [infos](https://www.npmjs.com/package/axios)  

## Start
- Enter the project, then go to a terminal 
- Once the installation is complete, type **npm -i** in the terminal. Install the dependencies in the local node_modules
folder.
- Type : **npm start** in the terminal
- result terminal :
```
[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
listening http://localhost:3000
```
- Open your browser: type **http://localhost:3000**

⚠️ When you install the project on your computer, `create an .env at the root of the project.` Don't forget to create an account on OpenWeather and MapBox

`The Documentation folder`, contains all the information needed to create an account, but also where the keys for the 
`.env file` are

```
APIKEY='INSERT_KEY'
APIMAPBOX='INSERT_KEY_MAPBOX'
```

## Illustration
### weather of the day
![weather of the day](https://user-images.githubusercontent.com/38507456/124138786-4a7bce80-da87-11eb-89ee-7c0e47810590.png)

### Page About
![image](https://user-images.githubusercontent.com/38507456/124139116-97f83b80-da87-11eb-8828-ead12c477612.png)

## API
API is an acronym for Applications Programming Interface. An API is therefore a programming interface that allows you to
"plug in" to an application to exchange data. It operates on an input/output agreement, it is a distribution channel. A
API is open and offered by the program owner. It is a concept and an intangible element.

- OpenWeather :
- Call current weather data for one location
```
api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```
- 5 Day / 3 Hour Forecast
api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
- 7 days
```
https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
```

[more infos openweather](https://github.com/Grezor/Weather-App/blob/master/chapitres/openWeatherMap/account.md)
- Mapbox :
```
https://api.mapbox.com/geocoding/v5
```

[more infos mapbox](https://github.com/Grezor/Weather-App/blob/master/chapitres/mapbox/mapbox.md)


## Functionality
- Today : **http://localhost:3000/**
- Week : **http://localhost:3000/sevendays**
- temperature of the week 
- Phase Moon 

## Use
- The user enters the name of the town or city.
- The application returns the information from the api via the name of the city.
- Weather visualization

## Project status
✔️ - the application works correctly

## Improvement
- visualize the temperature with a graph (chartjs) ✔️
- Change design to application `in progress`
- add more weather features ✔️
- chart precipitation `in progress`
- converter Celcius to Fahrenheit
- high and low tide ✔️
- lunar phase ✔️ // 04/04/21


## Contribute
It's hard. It's always hard the first time you do something. Especially when you are collaborating, making mistakes
isn't a comfortable thing. We wanted to simplify the way new open-source contributors learn & contribute for the first
time.

Reading articles & watching tutorials can help, but what's better than actually doing the stuff in a practice
environment? This project aims at providing guidance & simplifying the way beginners make their first contribution. If
you are looking to make your first contribution, follow the steps below.

**[Farcy Corentin](https://github.com/Farcy-Corentin)**

## Author
**Duplessi Geoffrey**
