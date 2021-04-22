import React from 'react';
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{ color: '#FFF' }}>Logo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{ color: '#FFF' }}></span>
                </button>

                <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: '#FFF' }} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: '#FFF' }} to="/buy">Buy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: '#FFF' }} to="/sell">Sell</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: '#FFF' }} to="/auction">Auction</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: '#FFF' }} to="/contact-us">Contact us </Link>
                        </li>

                    </ul>

                    <Link className="nav-link" style={{ color: '#FFF' }} to="/login">Login</Link>
                    <Link className="nav-link" style={{ color: '#FFF' }} to="/signup">Sign Up</Link>
                    <img src="./img/shopping-cart.png" alt="cart" style={{ height: '25px' }} />
                </div>
            </div>
        </nav>

    );
};

export default NavBar;