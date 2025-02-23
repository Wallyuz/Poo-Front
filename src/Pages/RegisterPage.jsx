import React from 'react';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import Register from '../Components/Register/Register';

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