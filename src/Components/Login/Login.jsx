import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === 'password') {
      setMessage('Login bem-sucedido!');
      onLogin();
      navigate('/account-details');
    } else {
      setMessage('Email ou senha incorretos!');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
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
        <p>Não tem uma conta? <Link to="/register">Registre-se aqui</Link></p>
      </div>
    </div>
  );
}

export default Login;