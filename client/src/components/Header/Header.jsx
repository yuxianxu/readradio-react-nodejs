import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo-readradio.png"

const Header = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:8080/auth/logout", "_self");
  };

  return (
    <div className="navbar">
      <span className="listItem">
        <Link className="link" to="/">
          <img src={Logo} className="logo" alt="logo" />
        </Link>
      </span>
      <span className="listItem">
        <Link to="/international">International</Link>
      </span>
      <span className="listItem">
        <Link to="/local">Local</Link>
      </span>
      <span className="listItem">
        <Link to="/mynotes">my notes</Link>
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
        <Link className="link" to="/login">
          Login
        </Link>
      )}

    </div>
  );
};

export default Header;
