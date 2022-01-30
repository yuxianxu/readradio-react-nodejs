import React from "react";
import "./Header.scss";
import {Link, NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo-readradio.png";

const Header = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:8080/auth/logout", "_self");
  };

  return (
    <div className="navbar">
      <span >
        <Link className="logo__container" exact="true" to="/">
          <img src={Logo} className="logo" alt="logo" />
          <span className="logo__text">ReadRadio</span>
        </Link>
      </span>
      <span className="listItem">
        <NavLink activeclassname="active" exact="true" to="/international">
          International
        </NavLink>
      </span>
      <span className="listItem">
        <NavLink activeclassname="active" exact to="/local">
          Local
        </NavLink>
      </span>
      <span className="listItem">
        <NavLink activeclassname="active" to="/mynotes">
          my notes
        </NavLink>
      </span>
     
        {user ? (
          <ul className="list">
            <li className="listItem">
              <img src={user.photos[0].value} alt="" className="avatar" />
            </li>
            <li className="listItem">{user.displayName}</li>
            <li className="listItem" onClick={logout}>
              Logout
            </li>
          </ul>
        ) : (
          <NavLink activeClassName="active" className="link" to="/login">
            Login
          </NavLink>
        )}
  
    </div>
  );
};

export default Header;
