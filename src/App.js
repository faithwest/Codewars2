import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Weather from './Weather';
import About from './About';
import Layout from './Layout';
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch("https://www.rainviewer.com/api")
      .then(res => res.json())  
      .then(data => setWeatherData(data))
  }, []); 

  return (
   <div className="App">
    <BrowserRouter>
    <Routes>
     <Route path="/"  element={<Layout />} >
        <Route index  element={ < Home weatherData={weatherData} />} />
        <Route path="weather"  element={ <Weather weatherData={weatherData} />} />
        <Route path="about"  element={ <About />} />
     </Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
