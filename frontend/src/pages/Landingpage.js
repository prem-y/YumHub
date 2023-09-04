import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import headimg from '../Images/headimg.jpg';
import headimg2 from '../Images/headimg2.jpg';
import headimg3 from '../Images/headimg3.jpg';
import Footer from "../components/Footer";
const Landingpage = () => {
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
      top:"2.5%",
      left:"75%",
      fontFamily:"'Concert One', cursive",
      fontSize: "1.5em",
    }
    const logo ={
      fontFamily:"'Concert One', cursive",
      fontSize: "2em",
      position:"relative",
      top:"0.2em",
      left:"0.3em"
  }
  return (
    <>
    <nav className='navbar-expand-lg bg-danger p-1'>
        <ul className="d-flex justify-content-between list-unstyled ">
            <li>
            <Link to={'/'} className="text-decoration-none text-white" style={logo}>YumHub</Link>
            </li>
            <li>
            <div className="mt-3 fs-5">
                <ul className=" d-flex flex-row list-unstyled ">
                <li>
                  <Link to={'/about'} className=' text-decoration-none me-3 text-white'>About</Link>
                </li>
                <li>
                  <Link to={'/login'} className=' text-decoration-none me-3 text-white'>Login</Link>
                </li>
                <li>
                  <Link to={'/signup'} className=' text-decoration-none me-3 text-white'>Signup</Link>
                </li>
                </ul>
            </div>
            </li>
        </ul>
    </nav>
    <div style={{position:"relative"}}>
    <Carousel className="" style={{ maxWidth: '1500px', maxHeight: '1500px'}}>
            <Carousel.Item>
              <img className="d-block w-100" src={headimg} alt="First slide" style={{ maxHeight: '500px', objectFit: 'cover'  }}/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={headimg2} alt="Second slide" style={{ maxHeight: '500px', objectFit: 'cover' }}/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={headimg3} alt="Second slide" style={{ maxHeight: '500px', objectFit: 'cover' }}/>
            </Carousel.Item>
          </Carousel>
    <h1 style={h1style} className='h1'>YumHub</h1>
    <p style={pstyle} >Embark on a culinary adventure with a treasure trove of exquisite recipes!</p>
    </div>

    
    <h2 className='text-center pt-2'>Popular recipes of India</h2>
    <p className='p-3 m-3 mt-2  fs-4'>Welcome to our recipe paradise! Discover a delectable world of culinary delights on our recipe website. From mouthwatering main courses to delightful desserts, we've curated a diverse collection of tried-and-tested recipes for every occasion. Whether you're a seasoned chef or a cooking enthusiast, our easy-to-follow recipes will elevate your kitchen adventures. Get ready to tantalize your taste buds and impress your guests with our inspiring dishes. Join us on this gastronomic journey and unleash your inner chef!</p>
    <Footer/>
    </>
  )
}

export default Landingpage;
