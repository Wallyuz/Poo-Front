import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Login/Login.css';

function DoctorLogin({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://67ba9813fbe0387ca137a638.mockapi.io/medicos');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const doctors = await response.json();
      const doctor = doctors.find(doctor => doctor.email === email && doctor.password === password);

      if (doctor) {
        setMessage('Login bem-sucedido!');
        onLogin(doctor.id);
        navigate(`/doctor-details/${doctor.id}`);
      } else {
        setMessage('Email ou senha incorretos!');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setMessage('Erro ao fazer login.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login Médico</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <div className="register-link">
        <p>Não tem uma conta? <Link to="/register-doctor">Registre-se aqui</Link></p>
      </div>
    </div>
  );
}

export default DoctorLogin;