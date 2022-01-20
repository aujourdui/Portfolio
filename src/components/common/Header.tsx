import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { MouseContext } from "../../context/mouse-context";

const Header = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <header className="header">
      <div className="logo">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </div>
      <div>
        <div className="header-links">
          <div className="home-link">
            <div
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <NavLink to="/" activeClassName="is-active" exact={true}>
                Home
              </NavLink>
            </div>
          </div>
          <div className="project-link">
            <div
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <NavLink to="/project" activeClassName="is-active" exact={true}>
                Projects
              </NavLink>
            </div>
          </div>
          <div className="resume-link">
            <div
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <NavLink to="/resume" activeClassName="is-active" exact={true}>
                Resume
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
