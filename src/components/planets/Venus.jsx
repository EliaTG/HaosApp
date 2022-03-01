import React from 'react'
import  Navbar from './../Navbar';
import { Link } from 'react-router-dom';
import VenusImg from './../images/venusphoto.jpg';

function Venus() {
  return (
    <section className="VenusPage">
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
                  <img src={VenusImg} alt="Venus Photo" />
                  <h1>Venus</h1>
                  <p>Venus is the second planet from the Sun and Earth’s closest planetary neighbor. Even though Mercury is closer to the Sun, Venus is the hottest planet in our solar system. Its thick atmosphere is full of the greenhouse gas carbon dioxide, and it has clouds of sulfuric acid. The atmosphere traps heat, making it feel like a furnace on the surface. It’s so hot on Venus, the metal lead would melt.</p>
                  <p>Venus is sometimes called Earth’s twin because it’s similar in size and structure, but the planets are very different in other ways.</p>
                </div>
                <div className="facts">
                  <div className="speed">
                      <p> Average orbital speed</p>
                      <small>35.02 km/s</small>
                  </div>
                  <div className="distance">
                      <p> Distance From Sun </p>
                      <small>0.7 AU</small>
                  </div>
                  <div className="moons">
                      <p> Moons</p>
                      <small>0</small>
                  </div>
                  <div className="EarthDays">
                      <p> Earth Days </p>
                      <small>225</small>
                  </div>
                  <div className="EarthDays">
                      <p> Planet Type </p>
                      <small>Terrestial</small>
                  </div>
                  <div className="EarthDays">
                      <p> Ringless </p>
                      <small>There are no rings around Venus.</small>
                  </div>  
                </div>
          </div>
</section>
  )
}

export default Venus