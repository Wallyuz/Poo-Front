import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState(''); // Novo estado para mensagem de feedback

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('As senhas não coincidem!');
      return;
    }
    // Simulação de registro bem-sucedido
    setMessage('Registro bem-sucedido!');
    console.log('Cadastro criado');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Age:', age);
  };

  return (
    <div className="register-container">
      <h1>Registro De Paciente</h1>
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
          <label htmlFor="confirmPassword">Confirme a Senha:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Idade:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      {message && <p>{message}</p>} {/* Exibe a mensagem de feedback */}
      <div className="doctor-register-link">
        <p>É médico? <Link to="/RegisterDoc">Clique aqui para registrar</Link></p>
      </div>
    </div>
  );
}

export default Register;
