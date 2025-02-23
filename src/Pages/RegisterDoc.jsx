import React from 'react';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import RegisterDoctor from '../Components/RegisterDoctor/RegisterDoctor';

export default function RegisterDoc() {
  return (
    <div className="App">
      <Header />
      <RegisterDoctor />
      <Footer />
    </div>
  );
}