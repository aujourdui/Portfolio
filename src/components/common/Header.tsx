import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => (
  <header className="header">
    <div className="logo">
      <Link to="/">
        <Logo />
      </Link>
    </div>
    <div>
      <div className="header-links">
        <div className="home-link">
          <NavLink to="/" activeClassName="is-active" exact={true}>
            Home
          </NavLink>
        </div>
        <div className="project-link">
          <NavLink to="/project" activeClassName="is-active" exact={true}>
            Projects
          </NavLink>
        </div>
        <div className="resume-link">
          <NavLink to="/resume" activeClassName="is-active" exact={true}>
            Resume
          </NavLink>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
