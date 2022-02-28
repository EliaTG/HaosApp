import React from 'react'
import { FcGlobe } from "react-icons/fc";
import './../App.scss'

function Navbar() {
  return (
    <>
        <nav>
            <div className='earth'><FcGlobe/></div>
            <h2 className='haostitle'>Haos app  </h2>
        </nav>
    </>
  )
}

export default Navbar