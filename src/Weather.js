import React from 'react';
import axios from 'axios';
import { Audio } from 'react-loader-spinner';

export default function Weather(props){
    function displayWeather(response){
        let temperature= response.data.main.temp;
      // alert (` It is ${temperature} in ${props.city}`);
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=a106d60ef865934fed5a96e8563d9489&units=metric`;
    axios.get(url).then(displayWeather);
    return (
        <Audio
  height="80"
  width="80"
  radius="9"
  color="orange"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
    )
}