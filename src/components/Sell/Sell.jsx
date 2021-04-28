import React from "react";
import { BsSearch } from "react-icons/bs";
import './Sell.css'

const Sell = () => {
  return (
    <div className="searchBox">
       <input className="searchInput"type="text" name="" placeholder="Search"/>
            <button className="searchButton" href="#">
                <i className="material-icons">
                   <BsSearch/>
                </i>
            </button>
    </div>
  );
};

export default Sell;
