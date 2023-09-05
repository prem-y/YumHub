import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import Accordion from 'react-bootstrap/Accordion';

const About = () => {
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
    <div>
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

    <h1 className='text-center text-danger text-capitalize my-5'>About YumHub</h1>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Who Are We ?</Accordion.Header>
        <Accordion.Body>
        <strong>Founders</strong> Prem , Ayush , Santosh and Murshid together came up with an idea of having a customised user friendly data read/write and erasable memory based web for knowing about millions of recipes across the world with different flavors and cuisines.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What you can expect ?</Accordion.Header>
        <Accordion.Body>
        <strong>Recipes of various cuisine</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Frequently asked questions(FAQs)</Accordion.Header>
        <Accordion.Body>
        <strong>How can I add my recipe ?</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.<br></br>
          <strong>Who can explore my recipes?</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.<br></br>
          <strong>How to edit or update my dishes ?</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Help</Accordion.Header>
        <Accordion.Body>
        <strong>How to save my progress ?</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Associate Partners</Accordion.Header>
        <Accordion.Body>
        <strong>Zomato</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.<br></br>
          <strong>Swiggy</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Settings</Accordion.Header>
        <Accordion.Body>
        <strong>Login/Signup</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.<br></br>
          <strong>Change Password</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>     
    </div>
    <Footer />
    </>
  );
};

export default About;
