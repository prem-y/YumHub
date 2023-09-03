import React from "react";

const Footer = () => {

  return (
    <>
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
            <a
                  href="https://github.com/Deveesh-Shetty/rudraksh"
                  target="_blank"
                  className=""
                >
                  {/* img here */}
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
