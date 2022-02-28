import React from 'react'
import  Navbar from './Navbar';
import { Link } from 'react-router-dom';
// import './../App.scss';

function Login() {
  return (
    <div>
        <div className='navbar'>
                    <Navbar/>
        </div>
        <div className="Login">
           <h1>Log In</h1>
           <form action="" className="loginform">
                <input type="text" placeholder='Username'/>
                <input type="password" name="" id="" placeholder='Password' />
                <button className="btnlogin">Log In</button>
                <div className="links">
                  <p><Link to="/forgetpass">Forget your Password?</Link></p>
                  <p><Link to="/register">Create an Account? </Link></p>
                </div>
           </form>
           <div className="solarsystem"></div>
        </div>
    </div>
  )
}

export default Login