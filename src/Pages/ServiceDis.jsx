import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import './ServiceDis.css';

function ServiceDis() {
  const [consultas, setConsultas] = useState([
    { id: 1, doctor: 'Dr. João Silva', time: '09:00', confirmed: false },
    { id: 2, doctor: 'Dra. Maria Oliveira', time: '13:00', confirmed: false },
    { id: 3, doctor: 'Dr. Pedro Santos', time: '16:00', confirmed: false },
  ]);

  const navigate = useNavigate();

  const desmarcarConsulta = (id) => {
    setConsultas(consultas.filter(consulta => consulta.id !== id));
  };

  const confirmarConsulta = (id) => {
    setConsultas(consultas.map(consulta => 
      consulta.id === id ? { ...consulta, confirmed: true } : consulta
     ));
    navigate('/rate'); 
  };

  return (
    <div className="App">
      {/* <Header /> */}
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