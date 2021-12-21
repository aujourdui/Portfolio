import React from "react";
import { contactDataList } from "../../resource/data";

const Footer = () => (
  <div className="footer">
    <h2 className="footer-title">Contact</h2>
    <div className="footer-contact">{contactDataList[0].phone}</div>
    <div className="footer-contact" id="footer-email">
      {contactDataList[0].email}
    </div>
    <div className="footerLink__wrapper">
      <div className="footer-link">
        <a href={contactDataList[0].github}>
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
      <div className="footer-link">
        <a href={contactDataList[0].linkedIn}>
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
      <div className="bottom-item footer-link">
        <a href={contactDataList[0].medium}>
          <i className="fab fa-medium fa-2x"></i>
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
