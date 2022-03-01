import React from 'react';
import  Navbar from './../Navbar';
import { Link } from 'react-router-dom';
import JupiterImg from './../images/mars.png';

function Jupiter() {
  return (
    <section className="JupiterPage">
          <div className='navbar'>
                    <Navbar/>
                    <div className="LinksPlanets">
                        <Link className="home" to="/">Home</Link>
                        <Link to="/activities">Activities</Link>
                        <Link to="/login">Log In</Link>
                        <Link to="/register">Sign Up</Link>
                    </div>

          </div>
        <div className="container">

              <div className="info">
                <img src={JupiterImg} alt="Jupiter Photo"/>
                <h1>Jupiter</h1>
                <p>Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.</p>
                <p>Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined.</p>
              </div>
              <div className="facts">
                <div className="speed">
                    <p> Average orbital speed</p>
                    <small>13.07 km/s</small>
                </div>
                <div className="distance">
                    <p> Distance From Sun </p>
                    <small>5.2 AU</small>
                </div>
                <div className="moons">
                    <p> Moons</p>
                    <small>79</small>
                </div>
                <div className="EarthDays">
                    <p> Earth Days </p>
                    <small>11.86</small>
                </div>
                <div className="PlanetType">
                    <p> Planet Type </p>
                    <small>Gas Giant</small>
                </div>
                <div className="Rings">
                    <p> Ringless </p>
                    <small>There are no rings around Mercury.</small>
                </div>  
              </div>
        </div>
    </section>
  )
}

export default Jupiter