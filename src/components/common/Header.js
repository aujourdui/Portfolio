import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => (
  <header className="header">
    <Link to="/">
      <Logo />
    </Link>
    <div className="header-links">
      <span className="home-link">
        <NavLink to="/" activeClassName="is-active" exact={true}>
          Home
        </NavLink>
      </span>
      <span className="project-link">
        <NavLink to="/project" activeClassName="is-active" exact={true}>
          Projects
        </NavLink>
      </span>
      <span className="resume-link">
        <NavLink to="/resume" activeClassName="is-active" exact={true}>
          Resume
        </NavLink>
      </span>
    </div>
  </header>
);

export default Header;
