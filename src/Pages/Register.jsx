import React from 'react';
import Register from '../Components/Register/Register';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';

function RegisterPage() {
  return (
    <>
    <Header />
    <div className="App">
      <Register />
    </div>
    <Footer />
    </>
  );
}

export default RegisterPage;