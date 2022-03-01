import React from 'react'
import  Navbar from './../Navbar';
import { Link } from 'react-router-dom';
import MarsImg from './../images/mars.png';

function Mars() {
  return (
    <section className="MarsPage">
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
              <img src={MarsImg} alt="Mars Photo"/>
              <h1>Mars</h1>
              <p>​Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.</p>
              <p>Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape.</p>
            </div>
            <div className="facts">
              <div className="speed">
                  <p> Average orbital speed</p>
                  <small>24.077 km/s</small>
              </div>
              <div className="distance">
                  <p> Distance From Sun </p>
                  <small>1.5 AU</small>
              </div>
              <div className="moons">
                  <p> Moons</p>
                  <small>2</small>
              </div>
              <div className="EarthDays">
                  <p> Earth Days </p>
                  <small>1.88</small>
              </div>
              <div className="PlanetType">
                  <p> Planet Type </p>
                  <small>Terrestial</small>
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

export default Mars