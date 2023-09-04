import React from "react";
import "../CSS/Footer.css"

const Footer = () => {

  return (
    <>
    <hr/>
      <footer className="py-4">
        <div className="container ">
          <ul className="d-flex justify-content-between list-unstyled">
            <li>
            <h1>YumHub</h1>
            <p>
              Blending Tech with Nature's Essence, Unveiling Plant Health
            </p>
            </li>
            <li>
            <p >Explore</p>
            </li>
            <li>
            <p>
              Contribute
            </p>
            <div>
                <img
                src="./assets/gitimg.png"

                height="26px"
                className="m-1 mb-2"
                 />
              <a
                  href="https://github.com/Prem-rao/YumHub.git"
                  target="_blank"
                  className=""
                >
                    Github
                </a>
                
            </div>
            </li>
          </ul>
        </div>
        <div className="text-center text-gray-500 py-2">
          &#169; Copyrights - YumHub {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;
