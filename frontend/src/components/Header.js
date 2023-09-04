import React, { useState } from "react";
import {Link} from 'react-router-dom';

const Header = ({userId}) => {
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
                    <li className="">
                    <Link to={'veg'} className="text-decoration-none m-3 text-white">Veg</Link>
                    </li>
                    <li>
                    <Link to={'/non-veg'} className="text-decoration-none m-3 text-white">Non-Veg</Link>
                    </li>
                    <li>
                    <Link to={`/profile/${userId}`} className="text-decoration-none m-3 text-white">My Profile</Link> 
                    </li>
                </ul>
            </div>
            </li>
        </ul>
    </nav>
    </>
  );
};

export default Header;
