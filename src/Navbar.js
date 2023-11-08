import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css"
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-brand" disabled>Navbar</button>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/" className="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link>
        <Link to="/weather" className="nav-item nav-link">Weather</Link>
        <Link to="/about" className="nav-item nav-link">About</Link>
      </div>
    </div>
  </nav>
);
}

export default Navbar;
