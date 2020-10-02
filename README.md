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
   * [L'etat du projet](#Etat-du-projet)
   * [Deployement](#Deployement)
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
```
- git clone [name_project]
- npm i
- npm start
```
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
- Today
- Week 
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







 
