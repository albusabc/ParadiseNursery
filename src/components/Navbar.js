import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [cartItems] = useState(0); // Example usage, setCartItems removed if not used

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart ({cartItems})</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
