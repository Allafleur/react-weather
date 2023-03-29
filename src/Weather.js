import React, { useState } from 'react';
import axios from 'axios';
import "./Weather.css";
import WeatherInfo from './WeatherInfo';


export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt*1000), 
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handlesubmit(event) {
    event.preventDefault();
    search();
  }
  function search(){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96ad27349a64ea1dcdfbe6f4d458c085&units=metric`;
    axios.get(url).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handlesubmit}>
      <input type="search" placeholder="Type a city.." onChange={updateCity} autoFocus="on"  />
      <input type="submit" value="Search" className="btn btn-primary form" />
      <input type="submit" value="Current city" className="btn btn-success form" />
    </form>
   );

  
  if (loaded) {
    
    return ( 
        <div className= "Weather">
        {form}
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
      search();
    return "Loading...";
  }

}
