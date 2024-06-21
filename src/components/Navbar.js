// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    background: '#333',
    color: '#fff',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 1rem'
  };

  return (
    <nav style={navStyle}>
      <h1>Viswa Prateek  -  22071A0557</h1>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/catalog" style={linkStyle}>Catalog</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact Us</Link></li>
        <li><Link to="/signup" style={linkStyle}>Signup</Link></li>

        <li><Link to="/login" style={linkStyle}>Login</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
