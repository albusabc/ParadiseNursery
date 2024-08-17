import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Paradise Nursery</h1>
        <p>Your one-stop shop for beautiful houseplants.</p>
        <Link to="/products" className="get-started-button">Get Started</Link>
      </header>
    </div>
  );
};

export default HomePage;
