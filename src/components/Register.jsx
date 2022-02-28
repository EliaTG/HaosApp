import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Register() {
  return (
    <div>
        <div className='navbar'>
                    <Navbar/>
        </div>
         <div className="register">
           <h1>Create new account</h1>
           <p>Already A Member? <Link to="/login">Log In</Link> </p>
           <form className="registerform" action=""> 
                <div className="name">
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                </div>
                <input type="email" name="" id="email" placeholder="Michael@example.com" />
                <input type="password" name="" id="pass" placeholder="Password"/>
                <button className="btnregister">Create account</button>
           </form>
        </div>
    </div>
  )
}

export default Register