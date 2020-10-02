![Black and White General Greeting Liberation Day Twitter Header](https://user-images.githubusercontent.com/38507456/86512535-65c7e580-be03-11ea-8833-eabacd5c92c3.png)

# Table of content: 
   * [Introduction](#Introduction)
   * [Installation](#Installation)
   * [Technologies](#Technologies)
   * [Start](#Start)
   * [Illustration](#Illustration)
   * [Api](#Api)
   * [Functionality](#Functionality)
   * [Utilisation](#Utilisation)
   * [Project status](#Project-status)
   * [Deployment](#Deployment)
   * [Contribute](#Contribute)
   * [Author](#Author)

## Introduction
I was tired of going out and seeing what the weather was like outside. Tired of using the google weather application.
This simple weather application will only display the current weather for a given area. 

Also, I always wanted to know how a REST API consumption works.

While learning NodeJS, I wanted to do something simple and fast. This project, is a web application allowing me to display the weather, temperature or humidity, wind, 1 week forecast...

## Installation
For the installation of the project everything is explained in the **chapters folder**, then the **installation** directory. 

## Technologies
```
Javascript, Node.JS, CSS
```
## Start
- On Github, go to the main page of the project
- Open a terminal, or git bash
- Replace the current working directory with the location where you want to clone it.
- Type ```git clone https://github.com/Grezor/Weather-App.git ```
- Press on ```Entry```
- Once the installation is complete, type **npm -i** in the terminal.     Install the dependencies in the local node_modules folder.
- Type : **npm start** in the terminal
- result terminal : 
```
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
listening http://localhost:3000
```
- Open your browser: type **http://localhost:3000**

## Illustration
```
In progress
```
## API
API is an acronym for Applications Programming Interface. An API is therefore a programming interface that allows you to "plug in" to an application to exchange data. It operates on an input/output agreement, it is a distribution channel. A API is open and offered by the program owner. It is a concept and an intangible element.

- OpenWeather : 
  - Call current weather data for one location
```
 api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```
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

## Use
- The user enters the name of the town or city. 
- The application returns the information from the api via the name of the city.
- Weather visualization

## Project status
✔️ - the application works correctly
## Deployment 
```
In progress
```
## Contribute
It's hard. It's always hard the first time you do something. Especially when you are collaborating, making mistakes isn't a comfortable thing. We wanted to simplify the way new open-source contributors learn & contribute for the first time.

Reading articles & watching tutorials can help, but what's better than actually doing the stuff in a practice environment? This project aims at providing guidance & simplifying the way beginners make their first contribution. If you are looking to make your first contribution, follow the steps below.

## Author
**Duplessi Geoffrey** 







 
