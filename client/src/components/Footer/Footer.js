import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">NYT Scraper</h5>
          <p className="grey-text text-lighten-4">A full MERN Stack web application.</p>
        </div>
      </div> 
    </div>
    <div className="footer-copyright">
      <div className="container">
      © 2018 Joseph Quinn
      </div>
    </div>
  </footer>
);

export default Footer;
