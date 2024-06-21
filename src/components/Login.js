// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your login logic, e.g., validate credentials
    // For demonstration, redirect to catalog page if credentials are correct
    if (formData.username === 'user' && formData.password === 'password') {
      // Replace '/catalog' with your actual catalog page route
      // Using Link component for navigation
      return <Link to="/catalog" />;
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '400px',
    margin: '2rem auto'
  };

  const inputStyle = {
    margin: '0.5rem 0',
    padding: '0.5rem',
    fontSize: '1rem',
    width: '100%',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

export default Login;
