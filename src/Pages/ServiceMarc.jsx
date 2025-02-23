import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';
import './ServiceMarc.css';

function ServiceMarc() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('https://67ba9813fbe0387ca137a638.mockapi.io/medicos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Dividir a string de horários em um array de horários e remover elementos vazios
        const doctorsWithTimes = data.map(doctor => ({
          ...doctor,
          times: doctor.schedule.split(' ').filter(time => time)
        }));
        setDoctors(doctorsWithTimes);
      } catch (error) {
        console.error('Erro ao buscar médicos:', error);
      }
    };

    fetchDoctors();
  }, []);

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setSelectedTime(null); // Reset selected time when doctor changes
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    if (!selectedDoctor || !selectedTime) {
      return;
    }

    // Lógica para confirmar a consulta
    const confirmedAppointment = {
      id: new Date().getTime(), // Gerar um ID único para a consulta
      doctor: selectedDoctor.name,
      time: selectedTime,
      confirmed: false,
    };

    // Salvar a consulta confirmada no localStorage
    const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    existingAppointments.push(confirmedAppointment);
    localStorage.setItem('appointments', JSON.stringify(existingAppointments));

    console.log('Consulta confirmada:', confirmedAppointment);

    // Remover o horário marcado da lista de horários disponíveis
    const updatedDoctors = doctors.map(doctor => {
      if (doctor.id === selectedDoctor.id) {
        const updatedTimes = doctor.times.filter(time => time !== selectedTime);
        console.log(`Atualizando horários para o médico ${doctor.name}:`, updatedTimes);
        return {
          ...doctor,
          times: updatedTimes
        };
      }
      return doctor;
    });

    setDoctors(updatedDoctors);
    setSelectedDoctor(null);
    setSelectedTime(null);

    navigate('/ServiceDis');
  };

  return (
    <div className="App">
{/*                   <Header /> */}
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