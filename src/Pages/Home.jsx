import React from 'react';
import '../Pages/HomeStyle.css';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="Title">Bem-vindo à Nossa Clínica Hospitalar</h1>
        <img 
          src="https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D" 
          alt="Hospital" 
          className="ImageHome" 
        />
        <p>
          Nossa clínica hospitalar oferece uma ampla gama de serviços médicos para atender às suas necessidades de saúde. 
          Com uma equipe de profissionais altamente qualificados e instalações modernas, estamos comprometidos em fornecer 
          cuidados de saúde de alta qualidade para você e sua família.
        </p>
        <p>
          <strong>Serviços oferecidos:</strong>
        </p>
        <ul>
          <li>Consultas médicas especializadas</li>
          <li>Atendimento de urgência e emergência</li>
          <li>Cuidados intensivos e internação</li>
          <li>Fisioterapia e reabilitação</li>
        </ul>
        <p>
          Estamos localizados no coração da cidade, com fácil acesso e estacionamento disponível. 
          Nossa missão é proporcionar um atendimento humanizado e eficiente, garantindo o bem-estar e a recuperação dos nossos pacientes.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Home;