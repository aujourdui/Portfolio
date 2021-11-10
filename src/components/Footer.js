import React from "react";
import { Link } from "react-router-dom";
// import { Navbar, NavbarBrand, Container } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => (
  <div className="footer">
    <h1 className="footer-title">Contact</h1>
    {/* <div>(236)833-8229</div>
        <div>kyosuke0215@gmail.com</div> */}
    <div>
      <Link to="https://github.com/aujourdui?tab=repositories">Github</Link>
    </div>
    <div>
      <Link to="https://www.linkedin.com/in/kyosuke-ito-506090a8/">
        Linkdin
      </Link>
    </div>
    <div className="bottom-item">
      <Link to="https://medium.com/@kyosuke0215">Medium</Link>
    </div>
  </div>
);

export default Footer;
