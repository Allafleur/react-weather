import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props){
    const[loaded, setLoaded] = useState(false);
    const[forecast, setForecast] = useState(null);

    useEffect(()=>{
        setLoaded(false);
    }, [props.coordinates]
    );

    console.log(props);
    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    if (loaded) {
        return (
           
          <div className="WeatherForecast">
            <div className="row">
              {forecast.map(function(dailyForecast, index) {
                if (index < 5) {
                  return (
                    <div className="col" key={index}>
                      <WeatherForecastDay data={dailyForecast} />
                    </div>
                  );
                } else {
                    return null;
                }
              })}
            </div>
          </div>
        );
      } else {
        let lat= props.coordinates.lat;
        let lon= props.coordinates.lon;
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=a106d60ef865934fed5a96e8563d9489&units=metric`
        
        axios.get(apiUrl).then(handleResponse);
        
        return null;
    }
    
}