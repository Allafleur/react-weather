import React, { useState } from 'react';
import axios from 'axios';
import "./Weather.css";
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';



export default function Weather(props) {

  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt*1000), 
      city: response.data.name,
      icon: response.data.weather[0].icon
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search(){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a106d60ef865934fed5a96e8563d9489&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  

  let form = (
    <form onSubmit={handleSubmit}>
       <input type="search" placeholder="Enter a city.." className="form-search" onChange={updateCity} autoFocus="on"  />
       <input type="submit" value="Search" className="btn btn-primary form" />
    </form>
   
   );

  
  if (loaded) {
    
    return ( 
        <div className= "Weather">
        {form}
        <WeatherInfo data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
      search();
    return "Loading...";
  }

}
