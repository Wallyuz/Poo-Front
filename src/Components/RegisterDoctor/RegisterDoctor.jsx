import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './registerDoctor.css';

function RegisterDoctor() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [plan, setPlan] = useState('');
  const [schedule, setSchedule] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doctorData = {
      name,
      email,
      password,
      specialty,
      plan,
      schedule,
    };

    try {
      const response = await fetch('https://67ba9813fbe0387ca137a638.mockapi.io/medicos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(doctorData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Cadastro de médico criado:', data);
      alert('Cadastro de médico criado com sucesso!');
    } catch (error) {
      console.error('Erro ao registrar médico:', error);
      alert('Erro ao registrar médico.');
    }
  };

  return (
    <div className="register-doctor-container">
      <h1>Registro de Médico</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="specialty">Especialidade:</label>
          <input
            type="text"
            id="specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="plan">Plano que atende:</label>
          <input
            type="text"
            id="plan"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="schedule">Horários para atendimento:</label>
          <input
            type="text"
            id="schedule"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      <div className="login-link">
        <p>Já é médico? <Link to="/doctor-login">Clique aqui</Link></p>
      </div>
    </div>
  );
}

export default RegisterDoctor;