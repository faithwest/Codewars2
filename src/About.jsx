import React from 'react';
import './App.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About CodeWars</h1>
      <p className="about-description">
        CodeWars is a dynamic community where developers can hone their coding skills
        through fun and challenging coding exercises known as kata. Our platform
        offers a diverse range of programming challenges, allowing developers of all
        levels to learn, practice, and master various programming languages and
        techniques.
      </p>

      <div className="about-highlights">
        <h2 className="about-subheading">Key Highlights</h2>
        <ul>
          <li>Engage in Kata: Solve coding challenges called kata to improve your problem-solving skills.</li>
          <li>Language Variety: CodeWars supports a wide range of programming languages, from JavaScript to Python.</li>
          <li>Community Interaction: Connect with a global community of developers, discuss solutions, and learn from others.</li>
          <li>Ranks and Honor: Progress through ranks and earn honor for your accomplishments in the coding arena.</li>
        </ul>
      </div>

      <div className="about-mission">
        <h2 className="about-subheading">Our Mission</h2>
        <p>
          At CodeWars, we are committed to providing a platform that fosters
          continuous learning and collaboration among developers. Our mission is
          to empower individuals to become proficient problem solvers, cultivate a
          passion for coding, and contribute to the growth of the global developer community.
        </p>
      </div>

      <p className="about-footer">Thank you for being a part of the CodeWars community!</p>
    </div>
  );
}

export default About;
