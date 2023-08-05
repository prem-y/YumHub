import React from 'react'
import {Link} from "react-router-dom"
const SignUp = () => {
  return (
    <>
      <div className='d-flex justify-content-center' style={{position:"relative",top:"10em"}}>
          <div className='border border-2 rounded p-3' style={{width:"25em"}} >
            <form >
            <div className='d-flex justify-content-between h4'>
            <span>Sign up</span>
            <span><Link to={"/"} className='text-decoration-none text-dark'>x</Link></span>
            </div>
            <div className='text-center'>
            <img src="./assets/forsignup.jpg" alt="" height={"200em"} style={{}}/>
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
            <div>
              <label htmlFor="password">Confirm Password</label>
            <input type="password" placeholder='Password' 
            className='form-control'/>
            </div>
            <button className='form-control mt-3 btn btn-outline-danger '>Sign up</button>
            <div className='mt-2'>Already have an account? <Link to={"/login"}className='text-decoration-none text-danger'>Log in</Link></div>
            </form>
          </div>
        </div>
    </>
  )
}

export default SignUp
