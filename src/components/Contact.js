// src/components/Contact.js
import React from 'react';

const Contact = () => {
  const contactStyle = {
    padding: '2rem',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '2rem auto'
  };

  return (
    <div style={contactStyle}>
      <h2>Contact Us</h2>
      <p>Email: contact@ecommerce.com</p>
      <p>Phone: 123-456-7890</p>
    </div>
  );
};

export default Contact;
