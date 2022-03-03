import React from 'react'
import  Navbar from './../Navbar';
import { Link } from 'react-router-dom';
import NeptuneImg from './../images/neptune.jpg';


function Neptune() {
  return (
    <section className="NeptunePage">
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
                    <img src={NeptuneImg} alt="Neptune Photo"/>
                    <h1>Neptune</h1>
                    <p>Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.</p>
                    <p>More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.</p>
                </div>
                <div className="facts">
                  <div className="speed">
                      <p> Average orbital speed</p>
                      <small>5.43 km/s</small>
                  </div>
                  <div className="distance">
                      <p> Distance From Sun </p>
                      <small>30.1 AU</small>
                  </div>
                  <div className="moons">
                      <p> Moons</p>
                      <small>14</small>
                  </div>
                  <div className="EarthDays">
                      <p> Earth Days </p>
                      <small>164.81</small>
                  </div>
                  <div className="PlanetType">
                      <p> Planet Type </p>
                      <small>Ice Giant</small>
                  </div>
                  <div className="Rings">
                      <p> Ringless </p>
                      <small>Neptune has at least five main rings</small>
                  </div>  
                </div>
          </div>
    </section>
  )
}

export default Neptune