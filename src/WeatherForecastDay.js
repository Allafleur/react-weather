import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props){

    function maxTemperature(){
        let maxTemperature = Math.round(props.data.temp.max);
        return `${maxTemperature}°`; 
    }
    function minTemperature(){
        let minTemperature = Math.round(props.data.temp.min);
        return `${minTemperature}°`; 
    }

    function day(){
        let date= new Date(props.data.dt*1000);
        let day= date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
       
        return days[day];
    }

    return (
    <div>
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={52} />
        <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-max-temp"> {maxTemperature()} </span>
            <span className="WeatherForecast-min-temp"> {minTemperature()} </span>
        </div>
    </div>
    )
}
