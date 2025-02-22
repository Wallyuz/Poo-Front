import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../Pages/Home";
import About from '../Pages/About';
import LoginPage from '../Pages/Login';
import Rate from '../Pages/Rate';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/rate" element={<Rate />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;