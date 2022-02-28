import React from 'react'
import { Link } from 'react-router-dom';
import  Navbar from './../Navbar';
import './../../App.scss'

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
    </section>
  )
}

export default Mercury