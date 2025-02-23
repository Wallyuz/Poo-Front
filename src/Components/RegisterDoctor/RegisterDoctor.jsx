import React, { useState } from 'react';
import './registerDoctor.css';

function RegisterDoctor() {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [plan, setPlan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Log para verificar se a função está sendo chamada
    console.log('Cadastro de médico criado');
    console.log('Name:', name);
    console.log('Specialty:', specialty);
    console.log('Plan:', plan);
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
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterDoctor;