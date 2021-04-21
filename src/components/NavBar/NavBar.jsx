import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonFill } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Logo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Buy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Sell</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/">Auction</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/">Contact us </a>
                        </li>
                        <form className="form-inline my-2 my-lg-0 ">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>

                    </ul>
                    <div className="i d-flex justify-content-start mr-5">
                        <BsPersonFill />
                    </div>
                    <div className="i d-flex justify-content-start">
                        <BsFillBagFill />
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default NavBar;