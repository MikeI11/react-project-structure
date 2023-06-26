import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    if (response.data && response.data.main && response.data.main.temp) {
      setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        city: response.data.name,
        icon: response.data.weather[0].icon,
      });
    } else {
      // Handle the error condition here, such as displaying an error message
      console.error("Unable to retrieve weather data.");
    }
  }

  function search() {
    const apiKey = "62231151ce343c4d68652e1617efc22f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const apiKey = "62231151ce343c4d68652e1617efc22f";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-mg-8 col-md-6">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-sm-12 col-md-3  mt-3 mt-md-0">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
            <div className="col-sm-12 col-md-3  mt-3 mt-md-0">
              <button
                type="button"
                onClick={getCurrentPosition}
                className="btn btn-secondary current-btn w-100"
              >
                Current
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
