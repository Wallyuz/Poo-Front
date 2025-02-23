import React from 'react';
import DoctorDetails from '../Components/DoctorDetails/DoctorDetails';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import { useParams } from 'react-router-dom';


function DoctorEditPage() {
  const { doctorId } = useParams(); // Obtém o ID do médico a partir dos parâmetros da URL

  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1>Editar Informações do Médico</h1>
        <DoctorDetails doctorId={doctorId} />
      </div>
      <Footer />
    </div>
  );
}

export default DoctorEditPage;