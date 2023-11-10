import React from 'react';
import WeatherData from './WeatherData'; // Adjust the path based on your project structure
import './App.css';

const Weather = () => {
  return (
    <div className="weather-container">
      <h1>Weather Information</h1>
      <p>Loading weather data...</p>
      <WeatherData />
    </div>
  );
};

export default Weather;
