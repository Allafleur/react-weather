import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <h1 className="text-capitalize"> {props.data.city} </h1>
        <ul>
          <li>
            <FormattedDate date= {props.data.date} />
          </li>
          <li className="desc">{props.data.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code= {props.data.icon} size={64} />
            </div>
            <div>
              <WeatherTemperature celsius= {props.data.temperature} />
            </div>
          </div>  
          </div>
          <div className="col-6">
            <ul>
              <li> Humidity: {props.data.humidity} mm </li>
              <li> Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    )
}