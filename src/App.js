import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProductList from './components/Product/ProductList'; // Import ProductList component
import Cart from './components/Cart/Cart'; // Import Cart component
import Checkout from './components/Checkout/Checkout'; // Import Checkout component
import Profile from './components/User/Profile'; // Import Profile component
import OrderHistory from './components/User/OrderHistory'; // Import OrderHistory component
import EditProfile from './components/User/EditProfile'; // Import EditProfile component
import ChangePassword from './components/User/ChangePassword'; // Import ChangePassword component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
