import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home";
import About from '../Pages/About';
import Rate from '../Pages/Rate';
import RegisterPage from '../Pages/RegisterPage';
import ServiceMarc from '../Pages/ServiceMarc';
import DetailsPage from '../Pages/DetailsPage';
import NotFound from '../Pages/NotFound';
import ServiceRedirect from '../Pages/ServiceRedirect';
import ServiceDis from '../Pages/ServiceDis';
import Conta from '../Pages/Conta';
import RegisterDoc from '../Pages/RegisterDoc';
import AccountDetailsPage from '../Pages/AccountDetailsPage';
import ScheduleAppointment from '../Pages/ScheduleAppointment';
import Login from '../Components/Login/Login';
import DoctorLogin from '../Components/DoctorLogin/DoctorLogin';
import RegisterDoctor from '../Components/RegisterDoctor/RegisterDoctor';
import Header from '../Components/Header/header';
import DoctorEditPage from '../Pages/DoctorEditPage'; // Importar o componente

function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleLogin = (id) => {
    setIsLoggedIn(true);
    setUserId(id);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId(null);
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} userId={userId} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/doctor-login" element={<DoctorLogin onLogin={handleLogin} />} />
        <Route path="/rate" element={<Rate />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register-doctor" element={<RegisterDoctor />} />
        <Route path="/ServiceMarc" element={<ServiceMarc />} />
        <Route path="/DetailsPage" element={<DetailsPage />} />
        <Route path="/ServiceRedirect" element={<ServiceRedirect />} />
        <Route path="/ServiceDis" element={<ServiceDis />} />
        <Route path="/Conta" element={<Conta />} />
        <Route path="/RegisterDoc" element={<RegisterDoc />} />
        <Route path="/account-details/:id" element={<AccountDetailsPage isLoggedIn={isLoggedIn} onLogout={handleLogout} />} />
        <Route path="/schedule-appointment" element={<ScheduleAppointment userId={userId} />} />
        <Route path="/doctor/:doctorId" element={<DoctorEditPage />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
