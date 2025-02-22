import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../Pages/Home";
import About from '../Pages/About';
import LoginPage from '../Pages/Login';
import Rate from '../Pages/Rate';
import RegisterPage from '../Pages/Register'
import Service from '../Pages/Service';
import CancelPage from '../Pages/Cancel';
import NotFound from '../Pages/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/rate" element={<Rate />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Service" element={<Service />} />
        <Route path='/CancelPage' element={<CancelPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;