// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle = {
    background: '#333',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 1rem'
  };

  return (
    <footer style={footerStyle}>
      <p>Developed by Viswa Prateek 22071A0557</p>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/catalog" style={linkStyle}>Catalog</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact Us</Link>
        <Link to="/signup" style={linkStyle}>Signup</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
      </nav>
    </footer>
  );
};

export default Footer;
