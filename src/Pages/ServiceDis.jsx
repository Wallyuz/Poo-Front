import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import './ServiceDis.css';

function ServiceDis() {
  const [consultas, setConsultas] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setConsultas(savedAppointments);

    const fetchDoctors = async () => {
      try {
        const response = await fetch('https://67ba9813fbe0387ca137a638.mockapi.io/medicos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Erro ao buscar médicos:', error);
      }
    };

    fetchDoctors();
  }, []);

  const desmarcarConsulta = async (id) => {
    const consulta = consultas.find(consulta => consulta.id === id);
    const doctor = doctors.find(doc => doc.name === consulta.doctor);

    if (doctor) {
      const updatedTimes = [...doctor.schedule.split(' '), consulta.time].sort();
      try {
        const response = await fetch(`https://67ba9813fbe0387ca137a638.mockapi.io/medicos/${doctor.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ schedule: updatedTimes.join(' ') }),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(`Horário ${consulta.time} adicionado de volta à API para o médico ${doctor.name}`);
      } catch (error) {
        console.error('Erro ao atualizar horários na API:', error);
      }
    }

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