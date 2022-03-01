import React from 'react'
import  Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Mercury from './images/mercury.png';


function Homepage() {
  return (
    <div className="HomePage">
        <div className='navbar'>
                    <Navbar/>
                    <div className="LinksPlanets">
                        <Link className="home" to="/">Home</Link>
                        <Link to="/activities">Activities</Link>
                        <Link to="/login">Log In</Link>
                         <Link to="/register">Sign Up</Link>
                    </div>

        </div>
        <div className="PlanetsCard">
          <Link to="/mercury">
              <div className="mercury">
                    <img src={Mercury} alt="Mercury" />
                    <h3>Mercury</h3>
                    <p>The fastest planet</p>
              </div>
          </Link>
          <Link to="/venus">
              <div className="venus">
                    <img src={Mercury} alt="Mercury" />
                    <h3>Venus</h3>
                    <p>The second planet from the Sun</p>
              </div>
          </Link>
          <Link to="/earth">
              <div className="earth">
                    <img src={Mercury} alt="Mercury" />
                    <h3>Earth</h3>
                    <p>Our home planet</p>
              </div>
          </Link>
          <Link to="/mars">
              <div className="mars">
                    <img src={Mercury} alt="Mercury" />
                    <h3>Mars</h3>
                    <p> A dusty, cold, desert world</p>
              </div>
          </Link>
          <Link to="/jupiter">
              <div className="jupiter">
                    <img src={Mercury} alt="Mercury" />
                    <h3>Jupiter</h3>
                    <p>The largest planet in the solar system</p>
              </div>
          </Link>
          <Link to="/saturn">
              <div className="saturn">
                    <img src={Mercury} alt="Mercury" />
                    <h3>Saturn</h3>
                    <p>The second-largest planet in our solar system.</p>
              </div>
          </Link>
          <Link to="/uranus">
              <div className="uranus">
                    <img src={Mercury} alt="Mercury" />
                    <h3>Uranus</h3>
                    <p>Uranus has 27 known moons</p>
              </div>
          </Link>
          <Link to="/neptune">
              <div className="neptune">
                    <img src={Mercury} alt="Mercury" />
                    <h3>Neptune</h3>
                    <p>Neptune is an ice giant</p>
              </div>
          </Link>
        </div>
    </div>
  )
}

export default Homepage