import React, { useState } from 'react';

const ScheduleAppointment = ({ userId }) => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: '',
    time: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.example.com/users/${userId}/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentDetails),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      alert('Consulta marcada com sucesso!');
    } catch (error) {
      console.error('Erro ao marcar a consulta:', error);
      alert('Erro ao marcar a consulta.');
    }
  };

  return (
    <div>
      <h1>Marcar Consulta</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Data:</label>
          <input
            type="date"
            name="date"
            value={appointmentDetails.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Hora:</label>
          <input
            type="time"
            name="time"
            value={appointmentDetails.time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Local:</label>
          <input
            type="text"
            name="location"
            value={appointmentDetails.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            name="description"
            value={appointmentDetails.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Marcar Consulta</button>
      </form>
    </div>
  );
};

export default ScheduleAppointment;