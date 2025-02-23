import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import './ServiceDis.css';

function ServiceDis() {
  const [consultas, setConsultas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setConsultas(savedAppointments);
  }, []);

  const desmarcarConsulta = (id) => {
    const updatedConsultas = consultas.filter(consulta => consulta.id !== id);
    setConsultas(updatedConsultas);
    localStorage.setItem('appointments', JSON.stringify(updatedConsultas));
  };

  const confirmarConsulta = (id) => {
    const updatedConsultas = consultas.map(consulta => 
      consulta.id === id ? { ...consulta, confirmed: true } : consulta
    );
    setConsultas(updatedConsultas);
    localStorage.setItem('appointments', JSON.stringify(updatedConsultas));
    navigate('/rate'); 
  };

  return (
    <div className="App">
      <div className="container-dis">
        <h1 className="Title">Consultas Marcadas</h1>
        <div className="consulta-list">
          <ul>
            {consultas.map((consulta) => (
              <li key={consulta.id} className={consulta.confirmed ? 'confirmed' : ''}>
                <p>{consulta.doctor} às {consulta.time}</p>
                <button onClick={() => desmarcarConsulta(consulta.id)} className="cancel-button">Desmarcar</button>
                {!consulta.confirmed && (
                  <button onClick={() => confirmarConsulta(consulta.id)} className="confirm-button">Confirmar Realização</button>
                )}
                {consulta.confirmed && <p>Consulta realizada!</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ServiceDis;