import React from 'react'
import {Link} from "react-router-dom"
const Login = () => {
  return (
    <div>
        <div className='d-flex justify-content-center' style={{position:"relative",top:"10em"}}>
          <div className='border border-3 p-3' style={{width:"25em"}} >
            <form >
            <div className='d-flex justify-content-between h4'>
            <span>Login</span>
            <span><Link to={"/"} className='text-decoration-none text-dark'>x</Link></span>
            </div>
            <div className='text-center'>
            <img src="./assets/email.png" alt="" height={"200em"} style={{}}/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
            <input type="email" placeholder='Email' className='form-control' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
            <input type="password" placeholder='Password' 
            className='form-control'/>
            </div>
            <button className='form-control mt-3 btn btn-outline-danger '>Log in</button>
            <div className='mt-2'>Don't have an account? create one <Link to={"/signup"}>Sign up</Link></div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login
