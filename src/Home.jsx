import React from 'react';
import './App.css'; 

function Home() {
  return (
    <div className="app-container">
      <h2>Welcome to the Weather App!</h2>
      <p>
        The Weather App is your go-to platform for staying informed about the
        current weather conditions and forecasts. Here's a brief overview of what
        you can expect from our app:
      </p>
  
      <div className="column-container">
        <section>
          <h3>Home Page:</h3>
          <p>
            On the home page, you'll find a warm welcome and a brief introduction to
            the Weather App. It's the perfect starting point for navigating through
            the various features we offer.
          </p>
        </section>
  
        <section>
          <h3>Weather Information:</h3>
          <p>
            Navigate to the "Weather" section to access detailed and up-to-date
            weather information. We provide key metrics such as temperature,
            humidity, and a brief description of the current weather conditions.
          </p>
        </section>
  
        <section>
          <h3>About Us:</h3>
          <p>
            If you're curious about the team behind the Weather App and our
            mission, head over to the "About" page. Learn more about our commitment
            to delivering accurate and reliable weather data to users worldwide.
          </p>
        </section>
      </div>
  
      <div className="column-container">
        <section>
          <h3>Layout:</h3>
          <p>
            The layout of the app is designed to be user-friendly, ensuring a
            seamless experience as you explore the different sections. The navigation
            bar at the top makes it easy to switch between pages.
          </p>
        </section>
  
        <section>
          <h3>Stay Informed:</h3>
          <p>
            Whether you're planning your day or preparing for a trip, our app helps
            you stay informed about the weather, empowering you to make decisions
            based on real-time data.
          </p>
        </section>
  
        <section>
          <h3>Weather Data Source:</h3>
          <p>
            We utilize cutting-edge technology to fetch weather data from reliable
            sources. The app's data is sourced from [provide the name of the weather
            data provider], ensuring accuracy and dependability.
          </p>
        </section>
      </div>
  
      <div className="column-container">
        <section>
          <h3>Enjoy Exploring!</h3>
          <p>
            Dive into the Weather App, explore the features, and stay ahead of the
            weather curve. We are dedicated to providing you with a seamless and
            enjoyable experience as you stay connected with the ever-changing weather
            conditions.
          </p>
        </section>
      </div>
  
      <p>Thank you for choosing the Weather App! We hope it becomes your trusted companion for all things weather-related.</p>
    </div>
  );
            }  
export default Home;
