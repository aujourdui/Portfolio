import React from "react";

const Footer = () => (
  <div className="footer">
    <h1 className="footer-title">Contact</h1>
    <div className="footer-contact">(236)833-8229</div>
    <div className="footer-contact" id="footer-email">
      kyosuke0215@gmail.com
    </div>
    <div className="footerLink__wrapper">
      <div className="footer-link">
        <a href="https://github.com/aujourdui?tab=repositories">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
      <div className="footer-link">
        <a href="https://www.linkedin.com/in/kyosuke-ito-506090a8/">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
      <div className="bottom-item footer-link">
        <a href="https://medium.com/@kyosuke0215">
          <i className="fab fa-medium fa-2x"></i>
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
