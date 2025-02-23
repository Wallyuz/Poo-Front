import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import './ServiceMarc.css';

function ServiceMarc() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const navigate = useNavigate();

  const doctors = [
    { name: 'Dr. João Silva', times: ['09:00', '10:00', '11:00'] },
    { name: 'Dra. Maria Oliveira', times: ['13:00', '14:00', '15:00'] },
    { name: 'Dr. Pedro Santos', times: ['16:00', '17:00', '18:00'] },
  ];

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setSelectedTime(null); // Reset selected time when doctor changes
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    // Lógica para confirmar a consulta
    const confirmedAppointment = {
      doctor: selectedDoctor.name,
      time: selectedTime,
    };

    // Simulação de salvamento da consulta confirmada
    console.log('Consulta confirmada:', confirmedAppointment);

    navigate('/ServiceDis');
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1 className="Title">Serviço de Marcar Consultas</h1>
        <div className="doctor-list">
          <h2>Médicos Disponíveis</h2>
          <ul>
            {doctors.map((doctor, index) => (
              <li
                key={index}
                onClick={() => handleDoctorSelect(doctor)}
                className={selectedDoctor === doctor ? 'selected' : ''}
              >
                {doctor.name}
              </li>
            ))}
          </ul>
        </div>
        {selectedDoctor && (
          <div className="time-list">
            <h2>Horários Disponíveis para {selectedDoctor.name}</h2>
            <ul>
              {selectedDoctor.times.map((time, index) => (
                <li
                  key={index}
                  onClick={() => handleTimeSelect(time)}
                  className={selectedTime === time ? 'selected' : ''}
                >
                  {time}
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedTime && (
          <div className="confirmation">
            <p>
              Você selecionou {selectedDoctor.name} às {selectedTime}.
            </p>
            <button className="confirm-button" onClick={handleConfirm}>Confirmar Consulta</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ServiceMarc;