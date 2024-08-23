/* eslint-disable no-unused-vars */
// import { useState } from 'react'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Ingredients from './pages/Ingredients';
// import CookingGuides from './pages/CookingGuide';
// import About from  './pages/About';

function App() {
  return (
    <>
      <Router>
    <div className="container">
      <Navbar className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-5 m-2 bg-white-600 shadow-lg"/>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/ingredients" element={<Ingredients />} /> 
          <Route path="/how_to_cook" element={<CookingGuides />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
        </main>
    </div>
    </Router>
      
    </>
  );
}

export default App
