import React from 'react';
import  Navbar from './../Navbar';
import { Link } from 'react-router-dom';
import UranusImg from './../images/uranus.jpg';

function Uranus() {
  return (
    <section className="UranusPage">
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
                  <img src={UranusImg} alt="Uranus Photo"/>
                  <h1>Uranus</h1>
                  <p>Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.</p>
                  <p>It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode.</p>
              </div>
              <div className="facts">
                <div className="speed">
                    <p> Average orbital speed</p>
                    <small>6.81 km/s</small>
                </div>
                <div className="distance">
                    <p> Distance From Sun </p>
                    <small>19.8 AU</small>
                </div>
                <div className="moons">
                    <p> Moons</p>
                    <small>27</small>
                </div>
                <div className="EarthDays">
                    <p> Earth Days </p>
                    <small>84</small>
                </div>
                <div className="PlanetType">
                    <p> Planet Type </p>
                    <small>Ice Giant</small>
                </div>
                <div className="Rings">
                    <p> Ringless </p>
                    <small>Uranus has 13 known rings.</small>
                </div>  
              </div>
        </div>
    </section>
  )
}

export default Uranus