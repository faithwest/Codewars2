import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="app-container">
      <h2>Welcome to Codewars!</h2>
      <h2 className="home-msg">
          "Welcome to CodeWars: Unleash the Code Ninja Within!"
          </h2>
          <h2>Here We practice to code!!
      </h2>

      <div className="column-container">
        <section>

          
        </section>

        <section>
          <h3>Coding Challenges:</h3>
          <p>
            Navigate to the "Challenges" section to access a variety of coding challenges.
            Test your skills, solve problems, and enhance your proficiency in different
            programming languages.
          </p>
        </section>

        <section>
          <h3>About Us:</h3>
          <p>
            If you're curious about the team behind Codewars and our mission, head over
            to the "About" page. Learn more about our commitment to providing a platform
            for coders to grow and learn collaboratively.
          </p>
        </section>
      </div>

      <div className="column-container">
        
        <section>
          <h3>Stay Informed:</h3>
          <p>
            Whether you're a beginner or an experienced coder, our platform helps you
            stay informed about the latest coding trends, techniques, and challenges.
          </p>
        </section>

        <section>
          <h3>Challenge Data Source:</h3>
          <p>
            We curate coding challenges from various sources.
          </p>
        </section>
      </div>

      <div className="column-container">
        <section>
          <h3>Enjoy Coding!</h3>
          <p>
            Dive into Codewars, explore the challenges.</p>
        </section>
      </div>

      <p>Thank you for choosing Codewars! We hope it becomes your go-to platform for honing your coding abilities.</p>
    </div>
  );
}

export default Home;

