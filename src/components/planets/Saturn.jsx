import React from 'react'
import  Navbar from './../Navbar';
import { Link } from 'react-router-dom';
import SaturnImg from './../images/mars.png';


function Saturn() {
  return (
    <section className="SaturnPage">
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
                    <img src={SaturnImg} alt="Saturn Photo"/>
                    <h1>Saturn</h1>
                    <p>Saturn is the sixth planet from the Sun and the second-largest planet in our solar system.</p>
                    <p>Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings – made of chunks of ice and rock – but none are as spectacular or as complicated as Saturn's.</p>
                </div>
                <div className="facts">
                  <div className="speed">
                      <p> Average orbital speed</p>
                      <small>9.69 km/s</small>
                  </div>
                  <div className="distance">
                      <p> Distance From Sun </p>
                      <small>9.5 AU</small>
                  </div>
                  <div className="moons">
                      <p> Moons</p>
                      <small>62</small>
                  </div>
                  <div className="EarthDays">
                      <p> Earth Days </p>
                      <small>29.45</small>
                  </div>
                  <div className="PlanetType">
                      <p> Planet Type </p>
                      <small>Gas Giant</small>
                  </div>
                  <div className="Rings">
                      <p> Ringless </p>
                      <small>Saturn has the most spectacular ring</small>
                  </div>  
                </div>
          </div>
     </section>
  )
}

export default Saturn