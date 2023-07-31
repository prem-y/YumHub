import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import {Link} from "react-router-dom"
const Home = () => {
    const h1style={
        position:"absolute",
        top:"50%",
        left:"40%",
        color:"white",
        fontFamily:"'Concert One', cursive",
        fontSize: "6em"
    }
    const pstyle={
      position:"absolute",
      top:"75%",
      left:"15%",
      color:"white",
      fontFamily:"'Concert One', cursive",
      fontSize: "2em",
      justifyContent:"center"
    }
    const navstyle={
      position:"absolute",
      top:"2.5%",
      left:"75%",
      fontFamily:"'Concert One', cursive",
      fontSize: "1.5em",
    }
  return (
    <>
    <div style={{position:"relative",}}>
    <img src="./assets/headimg.jpg" alt="" class="img-fluid" style={{filter:"brightness(60%)"}}/>
    <h1 style={h1style} className='h1'>YumHub</h1>
    <p style={pstyle} >Embark on a culinary adventure with a treasure trove of exquisite recipes!</p>
    </div>
    <nav className='navbar navbar-expand-lg' style={navstyle}>
        <ul className='navbar-nav'>
          <li className='nav-item p-2'>
            <Link className='nav-link text-white'>About</Link>
          </li>
          <li className='nav-item p-2'>
            <Link to={'/login'} className='nav-link text-white'>Log in</Link>
          </li>
          <li className='nav-item p-2'>
            <Link to={'/signup'} className='nav-link text-white'>Sign up</Link>
          </li>
        </ul>
    </nav>
    <h2 className='text-center pt-2'>Popular recipes of India</h2>
    <p className='p-3 m-3 mt-2  fs-4'>Welcome to our recipe paradise! Discover a delectable world of culinary delights on our recipe website. From mouthwatering main courses to delightful desserts, we've curated a diverse collection of tried-and-tested recipes for every occasion. Whether you're a seasoned chef or a cooking enthusiast, our easy-to-follow recipes will elevate your kitchen adventures. Get ready to tantalize your taste buds and impress your guests with our inspiring dishes. Join us on this gastronomic journey and unleash your inner chef!</p>
    <hr />
    <p className='text-center'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies.</p>
    <p className='text-center mb-5'> All trademarks are properties of their respective owners. 2023-2024 © YumHub™ Ltd. All rights reserved.</p>
    </>
  )
}

export default Home
