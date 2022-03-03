import React from 'react'
import { Link } from 'react-router-dom';
import  Navbar from './../Navbar';
import MercuryImg from './../images/mercuryphoto.jpg';


function Mercury() {
  return (
    <section className="MercuryPage">
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
                  <img src={MercuryImg} alt="Mercury Photo" />
                  <h1>Mercury</h1>
                  <p>The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.</p>
                  <p>Along with Venus, Earth, and Mars, Mercury is one of the rocky planets. It has a solid surface that is covered with craters like our Moon. It has a thin atmosphere, and it doesn’t have any moons. Mercury likes to keep things simple.</p>
                </div>
                <div className="facts">
                  <div className="speed">
                      <p> Average orbital speed</p>
                      <small>47.87 km/s</small>
                  </div>
                  <div className="distance">
                      <p> Distance From Sun </p>
                      <small>0.4AU</small>
                  </div>
                  <div className="moons">
                      <p> Moons</p>
                      <small>0</small>
                  </div>
                  <div className="EarthDays">
                      <p>Earth Days </p>
                      <small>88</small>
                  </div>
                  <div className="PlanetType">
                      <p>Planet Type </p>
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

export default Mercury