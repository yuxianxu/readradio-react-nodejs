import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header__nav">
      <Link to="/">
        <p className="header__text">logo</p>
      </Link>
      <Link to="/mynotes">
        <p className="header__text">my notes</p>
      </Link>
    </div>
  );
}

export default Header;
