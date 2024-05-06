import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const username = sessionStorage.getItem('username');

  return (
    <div className="home">
      <h1>Welcome, {username || 'Guest'}!</h1>
      <h1>Welcome to Our Online Store!</h1>
      <p>Explore our wide range of products and find exactly what you're looking for.</p>
      <button><Link to="/products">Shop Now</Link></button>
      <div>
        <h2>User Actions</h2>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          {/* Add other user-related links here */}
        </ul>
      </div>
      <div>
        <h2>Cart Actions</h2>
        <ul>
          <li><Link to="/cart">View Cart</Link></li>
          {/* Add other cart-related links here */}
        </ul>
      </div>
      <div>
        <h2>Checkout Actions</h2>
        <ul>
          <li><Link to="/checkout">Checkout</Link></li>
          {/* Add other checkout-related links here */}
        </ul>
      </div>
    </div>
  );
};

export default Home;
