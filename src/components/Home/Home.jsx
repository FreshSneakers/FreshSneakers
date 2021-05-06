import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css'

const Home = () => {
    return (
        <div className="Home">
            <div className="tone-1">
                <div className="H__product__info">
                    <h1>FRESHSNEAKERS</h1>
                    <p>remains the premier source for authentic, rare sneakers.</p>
                    <div className="H__info__btns">
                        <Link to="/buy" style={{ textDecoration: 'none', color: 'white' }} className="H__btn discover-btn">BUY</Link>
                        <Link to="/sell" style={{ textDecoration: 'none', color: 'white' }} className="H__btn cart-btn">SELL</Link>
                    </div>
                </div>
            </div>
            <div className="tone-2">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src="/img/jordan1.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/img/jordan2.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/img/jordan3.png" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Home;
