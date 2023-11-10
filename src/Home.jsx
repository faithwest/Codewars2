import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="app-container">
      <h2>Welcome to Codewars!</h2>
      <p>
        Codewars is your go-to platform for engaging in coding contests and sharpening
        your programming skills. Here's a brief overview of what you can expect from
        our platform:
      </p>

      <div className="column-container">
        <section>
          <h1>Home Page:</h1>
          <h2 className="home-msg">
          "Welcome to CodeWars: Unleash the Code Ninja Within!"
          </h2>
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
          <h3>Layout:</h3>
          <p>
            The layout of the platform is designed to be user-friendly, ensuring a
            seamless experience as you explore the different coding challenges. The
            navigation bar at the top makes it easy to switch between pages.
          </p>
        </section>

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
            We curate coding challenges from various sources to provide you with diverse
            and interesting problems to solve. The challenges cover a wide range of
            topics to cater to different skill levels.
          </p>
        </section>
      </div>

      <div className="column-container">
        <section>
          <h3>Enjoy Coding!</h3>
          <p>
            Dive into Codewars, explore the challenges, and enhance your coding skills.
            We are dedicated to providing you with a platform that fosters learning and
            collaboration within the coding community.
          </p>
        </section>
      </div>

      <p>Thank you for choosing Codewars! We hope it becomes your go-to platform for honing your coding abilities.</p>
    </div>
  );
}

export default Home;
