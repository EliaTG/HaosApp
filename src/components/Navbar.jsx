import React from 'react'
import { FcGlobe } from "react-icons/fc";
import './../App.scss'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <nav>
            <div className='earth'><FcGlobe/></div>
            <Link to="/"> <h2 className='haostitle'>Haos app</h2></Link>
        </nav>
    </>
  )
}

export default Navbar