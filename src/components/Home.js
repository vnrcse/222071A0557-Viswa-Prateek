// src/components/Home.js
import React from 'react';

const Home = () => {
  const homeStyle = {
    textAlign: 'center',
    padding: '2rem',
    background: 'url(/path/to/your/image.jpg) no-repeat center center/cover',
    
  };

  const headingStyle = {
    fontSize: '3rem',
    margin: '1rem 0'
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    margin: '1rem 0'
  };

  const buttonStyle = {
    padding: '1rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none'
  };

  return (
    <div style={homeStyle}>
      <h1 style={headingStyle}>Welcome to Our E-commerce Site</h1>
      <p style={subheadingStyle}>Find the best products here</p>
      <a href="/catalog" style={buttonStyle}>Shop Now</a>
    </div>
  );
};

export default Home;
