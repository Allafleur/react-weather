import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


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
      <input type="search" placeholder="Type a city.." onChange={updateCity} />
      <input type="submit" value="Search" className="btn btn-primary" />
      <input type="submit" value="Current city" className="btn btn-success" />
    </form>
  );

  
  if (loaded) {
    return (
      <div className="row">
        {form}
        <br />
        <h1> {city} </h1>
        <br />
        <p> Monday, 15:50 </p>
        <p> {weather.description} </p>
        <div className="col-3">
          <img src={weather.icon} alt={weather.description} />{" "}
        </div>
        <div className="col-3">
          <h2> {Math.round(weather.temperature)} °C</h2>
        </div>
        <div className="col-6">
          <ul>
            <li> Wind: {weather.wind} km/h</li>
            <li> Humidity: {weather.humidity} mm </li>
          </ul>
        </div>
       
      </div>
    );
  } else {
    return (
      <div className="row">
        {form}
        <br />
        <h1> Vienna</h1>
        <br />
        <p> Last updated: Monday, 15:50 </p>
        <p> Clear Sky </p>
        <div className="col-3">
        <img src={require('./sunny.png') } />
        </div>
        <div className="col-3">
          <h2> 10 °C </h2>
        </div>
        <div className="col-6">
          <ul>
            <li> </li>
            <li> Humidity: 49 mm </li>
            <li> Wind: 5.81 km/h</li>
            <li>
              {" "}
              <img src={weather.icon} alt={weather.description} />{" "}
            </li>
          </ul>
        </div>
        
      </div>
    );
  }
}
