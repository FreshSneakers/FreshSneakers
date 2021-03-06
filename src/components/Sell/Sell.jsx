import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import './Sell.css'
import { filterProduct } from "../../services/ProductService"
import { Link } from "react-router-dom";

const Sell = () => {

  const [search, setSearch] = useState('')
  const [result, setResult] = useState({})

  const onChange = (e) => {
    setSearch(e.target.value)
    filterProduct(search)
      .then((products) => {
        setResult(products)
      })
  }

  return (
    <div className="Sell">
      <div className="sell__title">
        <h1>Choose a product</h1>
        <p>Find the product you're looking for to continue</p>
      </div>
      <div className="div__">
        <div className="sell__search__box">
          <input
            className="sell__search__input"
            type="text"
            name="search"
            value={search}
            onChange={onChange}
            placeholder="Search for model..."
            autoComplete="off" />

          <button className="sell__search__button" disabled >
            <i className="material-icons">
              <BsSearch />
            </i>
          </button>
        </div>
      </div>
      <div className="container overResult" style={{ maxWidth: '600px' }}>
        {
          result.length > 0 &&
          result.map(sneaker => (
            <Link to={`/sneaker-sell/${sneaker._id}`} style={{ textDecoration: 'none', color: 'black' }} key={sneaker._id}>
              <div className="sell__result">
                <div className="sell__result__left">
                  <img src={sneaker.image} alt={sneaker.model} />
                </div>
                <div className="sell__result__right">
                  <span style={{ fontWeight: 'bold' }}>{sneaker.model}</span>
                  <span style={{ color: '#918e8e', fontWeight: 'bold' }}>{sneaker.color}</span>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Sell;
