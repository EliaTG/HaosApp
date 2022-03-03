import React from 'react'
import  Navbar from './Navbar';
import { Link } from 'react-router-dom';
import MercuryImg from './images/MercuryIcon.png';
import VenusImg from './images/VenusIcon.png';
import EarthImg from './images/EarthIcon.png';
import MarsImg from './images/MarsIcon.png';
import JupiterImg from './images/JupiterIcon.png';
import SaturnImg from './images/SaturnIcon.png';
import UranusImg from './images/UranusIcon.png';
import NeptuneImg from './images/NeptuneIcon.png';


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
                    <img src={MercuryImg} alt="Mercury" />
                    <h3>Mercury</h3>
                    <p>The fastest planet</p>
              </div>
          </Link>
          <Link to="/venus">
              <div className="venus">
                    <img src={VenusImg} alt="Venus" />
                    <h3>Venus</h3>
                    <p>The second planet from the Sun</p>
              </div>
          </Link>
          <Link to="/earth">
              <div className="earth">
                    <img src={EarthImg} alt="Earth" />
                    <h3>Earth</h3>
                    <p>Our home planet</p>
              </div>
          </Link>
          <Link to="/mars">
              <div className="mars">
                    <img src={MarsImg} alt="Mars" />
                    <h3>Mars</h3>
                    <p> A dusty, cold, desert world</p>
              </div>
          </Link>
          <Link to="/jupiter">
              <div className="jupiter">
                    <img src={JupiterImg} alt="Jupiter" />
                    <h3>Jupiter</h3>
                    <p>The largest planet in the solar system</p>
              </div>
          </Link>
          <Link to="/saturn">
              <div className="saturn">
                    <img src={SaturnImg} alt="Saturn" />
                    <h3>Saturn</h3>
                    <p>The second-largest planet in our solar system.</p>
              </div>
          </Link>
          <Link to="/uranus">
              <div className="uranus">
                    <img src={UranusImg} alt="Uranus" />
                    <h3>Uranus</h3>
                    <p>Uranus has 27 known moons</p>
              </div>
          </Link>
          <Link to="/neptune">
              <div className="neptune">
                    <img src={NeptuneImg} alt="Neptune" />
                    <h3>Neptune</h3>
                    <p>Neptune is an ice giant</p>
              </div>
          </Link>
        </div>
    </div>
  )
}

export default Homepage