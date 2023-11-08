import React from 'react';
import './App.css'; 


function Weather({ weatherData }) {
  return (
    <div>
      <h1>Weather Information</h1>
      {weatherData ? (
        /*conditonal to check weather data is defined then renders first parenthesis if not set loading */
        <div>
          <p>Temperature: {weatherData.temperature}°C</p>
          {/* Display other weather data as needed */}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default Weather;
