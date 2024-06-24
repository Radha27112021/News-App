import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5>About Us</h5>
            <p>
              We provide the latest news from various categories. Stay updated with our news app.
            </p>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Email: info@newsapp.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <hr className="my-4"/>
        <div className="row">
          <div className="col-12">
            <p>&copy; {new Date().getFullYear()} News App. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
