import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Weather from './Weather';
import About from './About';
import Layout from './Layout';
import WeatherData from './WeatherData'; // Import WeatherData

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home WeatherData={WeatherData} />} />
            <Route path="weather" element={<Weather WeatherData={WeatherData} />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
