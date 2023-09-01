import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          {/* Social Media Icons */}
         

          {/* Footer Content */}
          <div className="col-md-6 order-md-1 mt-md-0 mt-3">
            <h5 className="text-uppercase">Footer Content</h5>
            <p className='text-center'>
              By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies.
            </p>
            <p className='text-center'>
              All trademarks are properties of their respective owners. 2023-2024 © YumHub™ Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 order-md-2 mt-md-0 mt-3">
            <div className="social-icons mb-5">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright: <a href="/">MDBootstrap.com</a>
      </div>
    </footer>
  );
};

export default Footer;
