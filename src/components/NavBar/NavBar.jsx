import React from "react";
import { Link } from "react-router-dom";
import { logout } from '../../stores/AccessTokenStore'
import logo from '../../assets/logo.png';

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: "#FFF" }}>
          <img src={logo} alt="logo" style={{height:'40px', width:'45px'}}/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span
            className="navbar-toggler-icon"
            style={{ color: "#FFF" }}>

          </span>
        </button>

        <div
          className="collapse navbar-collapse ml-5"
          id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#FFF" }} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#FFF" }} to="/buy">
                Buy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#FFF" }} to="/sell">
                Sell
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#FFF" }} to="/orders">
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#FFF" }} to="/contact">
                Contact us{" "}
              </Link>
            </li>
          </ul>
          {!user ? (
            <>
              <Link className="nav-link" style={{ color: "#FFF" }} to="/signup">
                Sign Up
              </Link>
              <Link className="nav-link" style={{ color: "#FFF" }} to="/login">
                Login
              </Link>
            </>
          ) : (
            <>
              <Link className="nav-link" style={{ color: "#FFF" }} to="/profile">
                Profile
              </Link>
              <button className="nav-link" style={{ color: "#FFF", backgroundColor: '#343A3F', border: 'none' }} onClick={logout}>
                Log Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
