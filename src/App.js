// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Signup from './components/Signup ';
import Catalog from './components/Catalog';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup1';
import Footer from './components/Footer';
const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />

    </Routes>
    <Footer/>
  </Router>
);

export default App;