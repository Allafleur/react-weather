import React, { useState } from 'react';
import axios from 'axios';
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [city, setCity] = useState("");
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
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`

    });
  }

  function handlesubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a106d60ef865934fed5a96e8563d9489&units=metric`;
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
        <h1 className="text-capitalize"> {city} </h1>
        <ul>
          <li>
            <FormattedDate date= {weather.date} />
          </li>
          <li>{weather.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weather.icon} alt={weather.description} />{" "}
            <span className="temperature"> {Math.round(weather.temperature)}</span>
            <span className="unit">°C</span> 
          </div>
          <div className="col-6">
            <ul>
              <li> Wind: {weather.wind} km/h</li>
              <li> Humidity: {weather.humidity} mm </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className= "Weather">
        {form}
        <h1> Vienna</h1>
        <ul>
          <li>Last updated: Monday, 15:50</li>
          <li>Clear Sky</li>
        </ul>
        <div className="row">
          <div className="col-6">
          <img src={require('./sunny.png') } alt="sunny" />
          <span className="temperature">10</span>
          <span className="unit">°C</span> 
          </div>
          <div className="col-6">
            <ul>
              <li> Humidity: 49 mm </li>
              <li> Wind: 5.81 km/h</li>
              <li>
                {" "}
                <img src={weather.icon} alt={weather.description} />{" "}
              </li>
            </ul>
          </div>
        </div> 
      </div>
    );
  }

}
