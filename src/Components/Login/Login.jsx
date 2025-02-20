import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    // Se a autenticação for bem-sucedida, redirecione para a página inicial
    navigate('/');
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-button">Entrar</button>
      </form>
    </div>
  );
}