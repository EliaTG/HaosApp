import React from 'react';
import  Navbar from './../Navbar';
import { Link } from 'react-router-dom';
import EarthImg from './../images/Earth.png';

function Earth() {
  return (
    <section className="EarthPage">
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
                  <img src={EarthImg} alt="Earth Photo"/>
                  <h1>Earth</h1>
                  <p>Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.</p>
                  <p>While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.</p>
                </div>
                <div className="facts">
                  <div className="speed">
                      <p> Average orbital speed</p>
                      <small>29.78 km/s</small>
                  </div>
                  <div className="distance">
                      <p> Distance From Sun </p>
                      <small>1 AU</small>
                  </div>
                  <div className="moons">
                      <p> Moons</p>
                      <small>1</small>
                  </div>
                  <div className="EarthDays">
                      <p> Earth Days </p>
                      <small>365.25</small>
                  </div>
                  <div className="EarthDays">
                      <p> Planet Type </p>
                      <small>Terrestial</small>
                  </div>
                  <div className="EarthDays">
                      <p> Ringless </p>
                      <small>There are no rings around Earth.</small>
                  </div>  
                </div>
          </div>
     </section>
  )
}

export default Earth